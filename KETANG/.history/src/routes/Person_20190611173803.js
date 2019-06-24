import React from 'react';
import { connect } from 'react-redux';
import {Switch,Route,Redirect} from 'react-router-dom';
//导入组件
import Login from './person/Login';
import Register from './person/Register';
import Info from './person/Info';
import Tip from './person/Tip';

//导入api文件夹中的请求数据的方法
import {checkLogin} from '../api/person';
//导入样式
import '../static/css/person.css'
class Person extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            isLogin:false
        }
    }
    //验证是否登录
    async componentWillMount(){
        let result=await checkLogin(),
            isLogin = parseFloat(result.code)===0 ? true:false;
        this.setState({
            isLogin:isLogin
        })
    }
    render(){
        return <section>
            <Switch>
            {/* render进行权限校验 
            //路由的验证和渲染是同步的，因此不允许在校验中出现异步，因为若是异步，则要等到请求完数据才能渲染组件，这样做路由不允许
                 <Route path='/person/info' render={async ()=>{
                    //是否登录的权限校验
                    let result = await checkLogin();
                    if(parseFloat(result.code)===0){
                        return <Info/>
                    }else{
                        return <Tip/>
                    }}}></Route> */}
                     <Route path='/person/info' render={()=>{
                        //是否登录的权限校验
                        if(this.state.isLogin){
                            return <Info/>
                        }else{
                            return <Tip/>
                        }}}></Route>
                <Route path='/person/login' component={Login}></Route>
                <Route path='/person/register' component={Register}></Route>
                <Redirect from='/person' to='/person/info'></Redirect>
            </Switch>
        </section>;
    }
}
export default connect()(Person);