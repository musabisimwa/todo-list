//actions

import Item from "../models/item";

//add ,remove

 export enum Action{
    AddTodo ='addTodo',
    RemoveTodo='removetodo'
}

export default interface ActionType {
    type:Action;
    payload:Item;
}
