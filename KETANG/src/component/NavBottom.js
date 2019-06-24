import React from 'react';
import { connect } from 'react-redux';
/*上导航没有放在routes里面，所以它不受路由管控，但在上导航中有个返回按钮，这里要用到history.goback所以只能用react-rouetr-dom中的WithRouter
把该组件变为受路由管控的组件，受路由管控的组件有两个优点：1、路由匹配上了，会自动渲染组件2、受路由管控的组件会在其props上增加三个属性history 
localtion match，因此，想要用history必须要将其转换为受路由管控组件
*/
import {withRouter,NavLink} from 'react-router-dom';
//导入antd
import {Icon} from 'antd';
class NavBottom extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <footer className='footerNavBox'>
            <NavLink to='/course'><Icon type='home'></Icon><span>首页</span></NavLink>
            <NavLink to='/mycourse'><Icon type='solution'></Icon> <span>我的课程</span> </NavLink>
            <NavLink to='/person'><Icon type='user'></Icon> <span>个人中心</span> </NavLink>
        </footer>;
    }
}
export default withRouter(connect()(NavBottom));