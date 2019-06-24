import React from 'react';
import { connect } from 'react-redux';
/*上导航没有放在routes里面，所以它不受路由管控，但在上导航中有个返回按钮，这里要用到history.goback所以只能用react-rouetr-dom中的WithRouter
把该组件变为受路由管控的组件，受路由管控的组件有两个优点：1、路由匹配上了，会自动渲染组件2、受路由管控的组件会在其props上增加三个属性history 
localtion match，因此，想要用history必须要将其转换为受路由管控组件*/
import { withRouter } from 'react-router-dom';

//导入antd
import {Icon} from 'antd';

//用transition来实现filterBox这个盒子的显示和隐藏，而他的控制显示和隐藏的原理是控制透明度从0不安慰1的效果
import { Transition } from 'react-transition-group';
const duration = 300;
const defaultStyle = {
  transition: `opacity ${duration}ms`,
  opacity: 0,
}
const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};





class NavTop extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            in:false
        }
    }
    render(){
        return <header className='headerNavBox'>
            {/* 首页的导航结构 */}
            <div className='homeBox'>
                <div className='baseBox'>
                {/* logo一般都用h1，其中h1中的文字是给搜索引擎看的 */}
                    <h1 className='logo'>珠峰培训</h1> 
                    <Icon className='icon' type='bars' style={{fontSize:'0.6rem'}}></Icon>
                </div>
    {/* transition是react-transition-group插件中的组件，是用来实现过渡动画的 */}
    {/* 在transition里将in设置为this.state.in（也就是该组件构造函数里定义的状态中的in，设置默认值为false（隐藏）,即this.state={in:false}），以后点击的时候把this.state.in从false和true来回切换即可实现显示和隐藏, */}
                <transition in={this.state.in}>  
                {
                    state=>{
                    return <ul className='filterBox' style={{...defaultStyle,...transitionStyles[state]}}> 
                    {/* style是从上面定义的defaultStyle和transitionStyles中拿值 */}
                            <li>全部课程</li>
                            <li>REACT课程</li>
                            <li>VUE课程</li>
                            <li>小程序课程</li>
                           </ul>
                    }
                }
                </transition>
            </div>
        </header>;
    }
}
export default withRouter(connect()(NavTop));
