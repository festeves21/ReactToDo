import React from "react";
import {ReactComponent as CheckSVG } from './check.svg'
import {ReactComponent as DeleteSVG} from './delete.svg'
 

const iconTypes = { 
                    "check" : <CheckSVG/>,
                    "delete" :<DeleteSVG/>
 }

function ToDoIcon({type}){
    console.log(type);
    return (
        <span className={`Icon Icon-svg Icon-${type}`}>
            {iconTypes[type]}
        </span>
    )
}

export {ToDoIcon}