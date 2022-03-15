import React from "react";

function TodoItem(props){
    return(
        <li>
            <span>C</span>
            <p>{props.item.text}</p>
            <span>x</span>
        </li>
    )
}
export {TodoItem};