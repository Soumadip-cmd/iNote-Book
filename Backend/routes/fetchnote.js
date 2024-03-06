const express = require("express");
const path = require("path");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const Notes = require("../models/Notes");

const router = express.Router();
router.use(express.json());

router.get("/note", fetchuser, async (req, res) => {
  try {
    const notedata = await Notes.find({ user: req.user.id });
    res.send(notedata);
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ error: "Internal Error Occured.." });
  }
});

router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Write a valid Title.").isLength({ min: 3 }),
    // password must be at least 5 chars long
    body("description", "Add at least 5 chars in Description.").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, description, tag } = req.body;
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.send(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(505).send("Some error occured");
    }
  }
);

router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  const newNote = {};
  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }
  let note = await Notes.findById(req.params.id);
  if (!note) {
    return res.status(500).json({ error: "Not possible.." });
  }
  if (note.user.toString() !== req.user.id) {
    return res.status(500).send("Not allowed..");
  }
  note = await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json({ note });
});
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  let note = await Notes.findById(req.params.id);
  if (!note) {
    return res.status(500).json({ error: "Not possible.." });
  }
  if (note.user.toString() !== req.user.id) {
    return res.status(500).send("Not allowed..");
  }
  note = await Notes.findByIdAndDelete(req.params.id);
  res.json({ success: "Your note has been deleted successfully", note: note });
});
module.exports = router;
