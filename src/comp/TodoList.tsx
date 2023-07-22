import* as React from 'react';
import {List} from 'antd';
import Item from '../redux/models/item';
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { removeTodoItem } from '../redux/dispatches/todoDispatch';
import { State } from '../redux/reducers/reducer';
import { itemProps } from '../types';
import ItemUI from './Item';


const onCloseHander =(item:Item,dispatchHandler)=>{
    return ()=>{
        dispatchHandler(item);
    }
}
const generateItemProps =(items:Item[],dispatchHandler) =>{
        const generatedItems = [] as itemProps[];
        items.forEach(item=>{
            generatedItems.push({
                ...item,
                onClose:onCloseHander(item,dispatchHandler)
            })
        });
        return generatedItems;
}
const TodoList =()=>{
    const dispatch =useDispatch();
    const removeItem = bindActionCreators(removeTodoItem,dispatch);
    // state is a todolist reducer state
    const currentList = useSelector((state:State)=>state.todo);

   
    const itemProps = generateItemProps(currentList,(item:Item)=>{
        console.log("item is",item); //intentional log
        
        removeItem(item);
    });
    
 
    return (<List 
        itemLayout='horizontal'
        dataSource={itemProps}
        renderItem={(item,index)=>(
            <List.Item>
                <ItemUI 
                id={item.id} 
                data={item.data} 
                created={item.created}
                 done={item.done}
                  active={item.active}
                   onClose={item.onClose} 
                   />
            </List.Item>
        )}
    />);
}
export default TodoList;