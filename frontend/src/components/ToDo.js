import React from 'react'

import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const ToDo = ({title,text,date, updateMode, deleteToDo}) => {
    return (
        <div className="todo">  
            <div className="title">{title}</div>
            <div className="text">{text}</div>
            <div className="date">{date}</div>
            <div className="icons">
                <BiEdit className='icon' onClick={updateMode} />
                <AiFillDelete className='icon' onClick={deleteToDo} />
            </div>
        </div>
    )
}

export default ToDo