import * as React from 'react';
import { Card, Button, Tooltip, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { itemProps } from '../types';


const ItemUI = (props: itemProps) => {
    return (<Card title={props.data}
        style={{ width: 500 }}
        extra={
            <Space wrap>
                <Tooltip />
                <Button
                    onClick={props.onClose}
                    danger
                    shape="circle"
                    icon={<CloseOutlined />}
                    
                />
            </Space>

        }>
        <p> details not implemented</p>
        <p>created on {props.created}</p> </Card>);
};

export default ItemUI;