import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button} from 'antd';
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
            <Button type='danger' onClick={ev=>{

            }}>退出登录</Button>
        </div>;
    }
}
export default withRouter(connect()(Info));