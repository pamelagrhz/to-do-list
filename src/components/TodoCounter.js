import React from "react";

function TodoCounter(total){
    return(
        <div>
            <span>{total.completed} Tareas completadas de {total.total}</span>
        </div>
    )
}
export {TodoCounter};