import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button} from 'antd';
//导入退出登录的数据请求
import {exitLogin} from '../../api/person'
class Info extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div className='personBaseInfo'>
            <p>
                <span>用户名：</span>
                <span>xxx</span>
            </p>
            <p>
                <span>邮箱：</span>
                <span>xxx@qq.com</span>
            </p>
            <p>
                <span>电话：</span>
                <span>11111111111</span>
            </p>
            <Button type='danger' onClick={async (ev)=>{
        // await是把 await exitLogin();该行之后的代码扔到等待队列中，它会把exitLogin();执行了，等exitLogin();执行完再执行await exitLogin();后面的代码
                await exitLogin(); 
                this.props.history.push('/person')
            }}>退出登录</Button>
        </div>;
    }
}
export default withRouter(connect()(Info));