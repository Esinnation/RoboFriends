import React from "react";

function SearchBox(props){
    return(
        <div className="p-2">
            <input 
            type='search'
            placeholder='search robots' 
            className="p-3 border border-green-600 bg-blue-200" 
            onChange={props.onChange}/>
        </div>
    )
}

export default SearchBox