import React from 'react';
import { connect } from 'react-redux';
import {Switch,Route,Redirect} from 'react-router-dom';
//导入组件
import Login from './person/Login';
import Register from './person/Register';
import Info from './person/Info';
import Tip from './person/Tip';
class Person extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section>
            <Switch>
            {/* render进行权限校验 */}
                <Route path='/person/info' render={()=>{
                    return '个人信息';
                }}></Route>
                <Route path='/person/login' component={Login}></Route>
                <Route path='/person/register' component={Register}></Route>
                <Redirect from='/preson' to='/person/info'></Redirect>


            </Switch>
        </section>;
    }
}
export default connect()(Person);