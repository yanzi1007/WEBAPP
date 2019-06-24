import React from 'react';
import { connect } from 'react-redux';
/*上导航没有放在routes里面，所以它不受路由管控，但在上导航中有个返回按钮，这里要用到history.goback所以只能用react-rouetr-dom中的WithRouter
把该组件变为受路由管控的组件，受路由管控的组件有两个优点：1、路由匹配上了，会自动渲染组件2、受路由管控的组件会在其props上增加三个属性history 
localtion match，因此，想要用history必须要将其转换为受路由管控组件*/
import { withRouter } from 'react-router-dom';
//导入antd
import {Icon} from 'antd';
class NavTop extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <header className='headerNavBox'>
            {/* 首页的导航结构 */}
            <div className='homeBox'>
                <div className='baseBox clearfix'>
                {/* logo一般都用h1，其中h1中的文字是给搜索引擎看的 */}
                    <h1 className='logo'><a href="#"></a></h1> 
                    <Icon className='icon' type='bars' style={{fontSize:'0.8rem'}}></Icon>
                </div>
                <ul className='filterBox'>
                    <li>全部课程</li>
                    <li>REACT课程</li>
                    <li>VUE课程</li>
                    <li>小程序课程</li>
                </ul>
            </div>
        </header>;
    }
}
export default withRouter(connect()(NavTop));
