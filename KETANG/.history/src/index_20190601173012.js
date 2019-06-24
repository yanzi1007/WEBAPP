//BASE
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'

//redux store
import {Provider} from 'react-redux';
import store from './store/index';

//antd Ant Design是蚂蚁金服和阿里巴巴开发的React-UI框架，不仅有html css 还有js
import {LocaleProvider} from antd; //LocaleProvider国际化组件：目的是让所有组件以中文的方式显示
import zh_CN from 'antd/lib/locale-provider/zh_CN';//导入中文语言的解析包

import boostrap from './static/css/bootstrap.min.css';
import './static/less/todo.less'; //要把todo在bootstrap后面引用，这样在todo里面写的样式会覆盖boostrap带的样式
//导入组件


ReactDOM.render(<Provider store={store}>
<HashRouter>
    <LocaleProvider lacale={zh_CN}>
    <div>



    </div>
    </LocaleProvider>
</HashRouter></Provider>,document.getElementById('root'))



