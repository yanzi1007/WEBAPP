import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import boostrap from './static/css/bootstrap.min.css';
import './static/less/todo.less'; //要把todo在bootstrap后面引用，这样在todo里面写的样式会覆盖boostrap带的样式
//导入组件


ReactDOM.render(<Provider store={store}>
<div className='panel panel-default'>
    
</div></Provider>,document.getElementById('root'))



