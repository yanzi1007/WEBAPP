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
import './static/css/common.css';
import './static/css/course.css';
import './static/css/person.css';
import './static/css/Mycourse.css';

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
        <main className='container'>
            <Switch>
                {/* 以后首页的二级路由走的是course/ */}
                <Route path='/course' component={Home}/> 
                <Route path='/mycourse' component={Mycourse}/>
                <Route path='/person' component={Person}/>
                {/* 这句话的意思是：当浏览器中的哈希值为'/'时，重定向到'/course'，这样不管是'/'还是'/course'渲染的都是Home组件
                    下面那句的意思是：当哈希值不是上面三种情况/course，/mycourse，/person中的一种时，就重定向到'/course'*/}
                {/* <Redirect from='/' to='/course'/>  */}
                <Redirect to='/course'/>
            </Switch>
        </main>
        {/* 底部 */}
        <NavBottom></NavBottom>
    </div>
    </LocaleProvider>
</HashRouter></Provider>,document.getElementById('root'))



