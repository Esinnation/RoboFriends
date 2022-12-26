import React from "react";

function Scroll(props){
    return(
        <div className="overflow-y-scroll border border-black h-[400px]">
            {props.children}
        </div>
    )
}

export default Scroll