import React from 'react';
import { connect } from 'react-redux';
import {Alert} from 'antd';

class Tip extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div>
            <Alert type='warning' message='未登录提醒' description='尊敬的用户，当前还没登录，登录后才可以查看个人信息'>

            </Alert>
        </div>;
    }
}
export default connect()(Tip);