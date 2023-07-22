import { Dispatch } from "@reduxjs/toolkit"
import ActionType, { Action } from "../actions/action"
import Item from "../models/item"


export const addTodoItem =(str:string)=>{
    const code = str.length + Math.floor(Math.random()*str.length*25)
    return (dispatch:Dispatch<ActionType>)=>{
        dispatch({
            type: Action.AddTodo,
            payload: {
                id:code,
                created:new Date().toISOString(),
                data:str,
                done:false,
                active:true
            }
        })
    }
}
 

export const removeTodoItem =(item:Item)=>{
    return (dispatch:Dispatch<ActionType>)=>{
        dispatch({
            type: Action.RemoveTodo,
            payload: item
        })
    }
}