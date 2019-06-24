import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button} from 'antd';
//导入退出登录的数据请求和获取用户信息请求
import {exitLogin,queryInfo} from '../../api/person';
//导入action
import action from '../../store/action/index';


class Info extends React.Component{
    constructor(props,context){
        super(props,context);
       
    }
    componentWillMount(){
        let {baseInfo,queryBaseInfo} = this.props; //queryBaseInfo是action中的方法，baseInfo是在reducer中给状态添加的属性
        if(!baseInfo){ //如果没有信息，就再派发任务，派发任务是执行action中的queryBaseInfo方法
            queryBaseInfo();
        }
    }
    render(){
        
        //获取到信息，则把信息结构出来，放到对应的位置上
       let {baseInfo}=this.props;
       if(!baseInfo){
           return '';
       }
       let {name,email,phone} = baseInfo;
        return <div className='personBaseInfo'>
            <p>
                <span>用户名：</span>
                <span>{name}</span>
            </p>
            <p>
                <span>邮箱：</span>
                <span>{email}</span>
            </p>
            <p>
                <span>电话：</span>
                <span>{phone}</span>
            </p>
            <Button type='danger' onClick={async (ev)=>{
        // await是把 await exitLogin();该行之后的代码扔到等待队列中，它会把exitLogin();执行了，等exitLogin();执行完再执行await exitLogin();后面的代码
                await exitLogin(); 
                this.props.history.push('/person/login')
            }}>退出登录</Button>
        </div>;
    }
}
export default withRouter(connect(state=>({...state.person}) , action.person)(Info));