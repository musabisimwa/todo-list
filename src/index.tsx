
import * as React from 'react'

import { App } from './App';
import{createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import store from './redux/config/store'

const index =document.getElementById("index");
const root = createRoot(index!);
root.render(
    <Provider store={store}>
        <App/>
        </Provider>

);
