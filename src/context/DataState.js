import DataContext from "./DataContext";

const DataState=(props)=>{
    
    const fetchnote_data=[
        {
          "_id": "65e429b6c397aed90a0a35be",
          "user": "65e42974c397aed90a0a35b9",
          "title": "Hello World",
          "description": "This is hello world program written in C",
          "tag": "general",
          "date": "2024-03-03T07:41:42.554Z",
          "__v": 0
        }
        
      ]
    
    
    return(
        <DataContext.Provider value={{fetchnote_data}}>
            {props.children}
        </DataContext.Provider>
        
    )
    
}

export default DataState