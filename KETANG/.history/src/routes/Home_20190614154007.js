import React from 'react';
import { connect } from 'react-redux';
import {Switch,Route,Redirect} from 'react-router-dom';

import List from './course/List';
import Info from './course/Info';
//在父组件中导入样式，让所有的子组件都可以用
import '../static/css/course.css';

class Home extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <section className='courseBox'>
            <Switch>
                <Route path='/course' exact component={List}></Route>
                <Route path='/course/info' component={Info}></Route>
            </Switch>
        </section>;
    }
}
export default Home; //这个组件用不到redux，所以不要用connect高阶