import React from "react";

function Card(props){
    const {name,email,id} =props.item

    return(
        <div className="bg-green-300 rounded-md p-3 m-3 inline-block  border-2 shadow-md grow">
            <img src={`https://robohash.org/${id}?size=200x200`}alt="robot" />
            <div className="">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}


export default Card