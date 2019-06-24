//BASE
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'

//redux store
import {Provider} from 'react-redux';
import store from './store/index';

//antd Ant Design是蚂蚁金服和阿里巴巴开发的React-UI框架，不仅有html css 还有js
import {LocaleProvider} from 'antd'; //LocaleProvider国际化组件：目的是让所有组件以中文的方式显示
import zh_CN from 'antd/lib/locale-provider/zh_CN';//导入中文语言的解析包

//导入样式
import './static/css/reset.min.css';
import './static/css/common.less';
import './static/css/course.less';
import './static/css/person.less';
import './static/css/Mycourse.less';

//导入组件
import NavTop from './component/NavTop';
import NavBottom from './component/NavBottom';
import Home from './routes/Home';
import Mycourse from './routes/Mycourse';
import Person from './routes/Person';

ReactDOM.render(<Provider store={store}>
<HashRouter>
    <LocaleProvider lacale={zh_CN}>
    <div>
        {/* 头部 */}
        <NavTop></NavTop>
        {/* 中间 */}
        <div className='container'>
            <Switch>
                <Route path='/' exact component={Home}/>
                {/* 以后首页的二级路由走的是course/ */}
                <Route path='/course' component={Home}/> 
                <Route path='/mycourse' component={Mycourse}/>
                <Route path='/person' component={Person}/>
                {/* 如果以上地址都不是，则定位到首页，并传一个404 */}
                <Redirect to='/?from=404'/> 
            </Switch>
        </div>
        {/* 底部 */}
        <NavBottom></NavBottom>
    </div>
    </LocaleProvider>
</HashRouter></Provider>,document.getElementById('root'))



