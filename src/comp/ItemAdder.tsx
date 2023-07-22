import { bindActionCreators } from "@reduxjs/toolkit";
import { Button, Space, Input } from "antd"
import React from "react"
import { useDispatch } from "react-redux"
import { addTodoItem } from "../redux/dispatches/todoDispatch";

const ItemAdder = () => {
    const dispatch = useDispatch();
    const addItem = bindActionCreators(addTodoItem, dispatch);
    let itemString = "";
    const onAdd = () => {
        console.log("on add clicked", itemString);
        if (itemString.length > 0) {

            addItem(itemString);
        }
    }
    return (<Space.Compact style={{ width: '100%' }}>
        <Input onChange={(e) => { 
            itemString = e.target.value;
            e.target.value="";
             }}  />
        <Button
            onClick={onAdd}
            type="primary">Add</Button>
    </Space.Compact>)
}

export default ItemAdder;