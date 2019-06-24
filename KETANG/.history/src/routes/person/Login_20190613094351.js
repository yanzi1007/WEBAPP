import React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox, Divider,Modal } from 'antd';
import {Link} from 'react-router-dom';
import md5 from 'blueimp-md5';
import {login} from '../../api/person';
import action from '../../store/action/index';

function loginFail() {
    const modal = Modal.error({
        title: '登录失败',
        content: '请稍后重新尝试',
      });
}

class Login extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    //antd实现登录成功后做什么，和登录失败出一个提示框（执行loginFail()函数，会出现登录失败的提示框）
    handleSubmit = ev =>{
        ev.preventDefault();//阻止默认行为
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
              let {username,password} = values;//value是用户输入的信息，我们拿到这个信息后，向服务器发送一个请求，然后服务器向我们返回登录成功或者失败的信息
              password = md5(password);//用md5进行加密
              console.log(password);
              //执行login向服务器发送请求，返回一个Promise实例
              let result = await login({
                name: username,
                password: password
            });
            if (parseFloat(result.code) === 0) {
                this.props.queryBaseInfo();
                //=>登录成功后我们需要重新获取已购买的课程信息（未登录下从服务获取的支付课程信息是获取不到的，但是登录后我们需要把购买信息同步到REDUX中，这样在我的课程中才能展示出来相关的信息）
                this.props.history.go(-1);
                console.log(this.props.history)
                return;
            }
            loginFail(); //登录失败执行loginFail弹出错误提示框
            }
        });
    
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        // 用antd实现用户名框密码框以及登录按钮和注册按钮
        return <div className='personLoginBox'>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                <span>Or</span>  <Link to='/person/register'>register now!</Link>
                </Form.Item>
            </Form>
        </div>
  }
}

export default Form.create({ name: 'normal_login' })(connect(state=>({...state.person}) , action.person)(Login));