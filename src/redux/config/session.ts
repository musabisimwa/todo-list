import Item from "../models/item";

export const updateSession = (state:Item[])=>{
    localStorage.setItem(SESSION_KEY,JSON.stringify(state))
}
export const SESSION_KEY ='itemList';