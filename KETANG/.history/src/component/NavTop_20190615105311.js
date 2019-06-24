import React from 'react';
import { connect } from 'react-redux';
/*上导航没有放在routes里面，所以它不受路由管控，但在上导航中有个返回按钮，这里要用到history.goback所以只能用react-rouetr-dom中的WithRouter
把该组件变为受路由管控的组件，受路由管控的组件有两个优点：1、路由匹配上了，会自动渲染组件2、受路由管控的组件会在其props上增加三个属性history 
localtion match，因此，想要用history必须要将其转换为受路由管控组件*/
import { withRouter } from 'react-router-dom';

//导入antd
import {Icon} from 'antd';

import action from '../store/action/index';

//用transition来实现filterBox这个盒子的显示和隐藏，而他的控制显示和隐藏的原理是控制透明度从0不安慰1的效果
import { Transition } from 'react-transition-group';
const duration = 300; //动画持续时间
const defaultStyle = { //默认样式
  transition: `opacity ${duration}ms`,
  opacity: 0
}
const transitionStyles = { //过渡过程中，不同状态下对应的样式
  entering: { opacity: 0},
  entered:  { opacity: 1},
};


class NavTop extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            in:false
        }
    }
    handleClick(ev){
        let target=ev.target,
            tarTag=target.tagName;
            if(tarTag==='li'){
                let {queryList}=this.props;
                queryList({
                    page:1,
                    type:target.getAttribute('type'), //获取自定义的类型属性值
                    flag:'replace' //切换类别是替换redux中的状态信息
                });
                this.setState({in:false}); //点击列表中的某一项，筛选出对应的内容，并让列表消失
            }
    }
    render(){
        return <header className='headerNavBox'>
            {/* 首页的导航结构 */}
            <div className='homeBox'>
                <div className='baseBox'>
                {/* logo一般都用h1，其中h1中的文字是给搜索引擎看的 */}
                    <h1 className='logo'>珠峰培训</h1> 
                    <Icon className='icon' type='bars' style={{fontSize:'0.6rem'}}
                    onClick={ev=>{this.setState({
                        in:!this.state.in
                    });
                }}></Icon>
                </div>
    {/* transition是react-transition-group插件中的组件，是用来实现过渡动画的，其属性in是用来控制显示和隐藏的，当in的值改变，transition组件会重新渲染(属性改变组件渲染)，会把transition里面的函数执行，
    如果in为true,...transitionStyles[state]=...transitionStyles[0]拿到的是transitionStyles的第一个数，也就是opacity:0，再把这个赋给ul的style，所以ul的opacity为0，则隐藏。
    若in为true，则...transitionStyles[state]=...transitionStyles[1]，拿到的是transitionStyles的第一个数，也就是opacity:1，再把这个赋给ul的style，所以ul的opacity为1，则显示
    所以react-transtion-group也是通过控制透明度来控制显示和隐藏，并且是通过转态来控制的*/}
    {/* 在transition里将in设置为this.state.in（也就是该组件构造函数里定义的状态中的in，设置默认值为false（隐藏）,即this.state={in:false}），以后点击的时候把this.state.in从false和true来回切换即可实现显示和隐藏, */}
                <Transition in={this.state.in} timeout={0}>  
                {
                    state=>{
                    return <ul className='filterBox' style={{...defaultStyle,...transitionStyles[state],display:this.state.in ? 'block':'none'}}
                    onClick={this.handleClick}> 
                    {/* style是从上面定义的defaultStyle和transitionStyles中拿值 */}
                            <li type='all'>全部课程</li>
                            <li type='react'>REACT课程</li>
                            <li type='vue'>VUE课程</li>
                            <li type='xiaochengxu'>小程序课程</li>
                           </ul>
                    }
                }
                </Transition>
            </div>
        </header>;
    }
}
export default withRouter(connect(null,action.course)(NavTop));
