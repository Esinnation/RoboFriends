import React from "react";
import Card from "./Card";



function CardList(props){

    const cards = props.robots.map(item => <Card key={item.id} item={item} />)
    return(
        [cards]
    )
}

export default CardList