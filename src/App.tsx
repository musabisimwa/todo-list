import * as React from 'react';
import TodoList from './comp/TodoList';
import ItemAdder from './comp/ItemAdder';
import { Divider, Typography } from 'antd';
const {Title} =Typography;
export const App: React.FC =()=>(
<div>
<Typography>
    <Title>To-do list (challenge 01)</Title>
    <Divider/>
</Typography>
<TodoList/>
<ItemAdder/>
</div>
);