import Item from "../models/item";
import ActionType ,{Action} from "../actions/action";
import{cloneDeep} from 'lodash';
import { combineReducers } from "@reduxjs/toolkit";
import { SESSION_KEY, updateSession } from "../config/session";

let initialState= [] as Item[];
let storedList = localStorage.getItem(SESSION_KEY);
if(storedList){
    try{
        initialState =JSON.parse(storedList);
    }catch(err){
    console.error("err while getting storage values",err);
    initialState =[] as Item[];
    }
    
}
export const todoReducer =(state:Item[] =initialState ,
    action:ActionType) => {
        let newState: Item[] = cloneDeep(state);
    switch(action.type){
        case Action.AddTodo:
            newState.push(action.payload);
            updateSession(newState);
            console.log("sessionStorage",storedList)
            return newState;

        case Action.RemoveTodo:
            
            newState=newState.filter(x=> x.id !== action.payload.id);
            console.log("sessionStorage",storedList);
            updateSession(newState);
            return newState;
        default:
            return state;
    }
}

const reducers = combineReducers({
   todo: todoReducer
});

export default reducers;

export type State =ReturnType<typeof reducers>;