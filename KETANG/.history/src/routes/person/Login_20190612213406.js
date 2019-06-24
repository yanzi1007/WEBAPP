import React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox, Divider,Modal } from 'antd';
import {Link} from 'react-router-dom';
import md5 from 'blueimp-md5';
import {login} from '../../api/person';

function success() {
    Modal.success({
      title: 'This is a success message',
      content: 'some messages...some messages...',
    });
    setTimeout(()=>Modal.destroy(),1000)
  }

class Login extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    handleSubmit = ev =>{
        ev.preventDefault();//阻止默认行为
        this.props.form.validateFields((err, values) => {
            if (!err) {
              let {username,password} = values;//value是用户输入的信息，我们拿到这个信息后，向服务器发送一个请求，然后服务器向我们返回登录成功或者失败的信息
              password = md5(password);//用md5进行加密
              //执行login向服务器发送请求，返回一个Promise实例
              login({name:username,password:password}).then(result=>{
                if(parseFloat(result.code)===0){
                    this.props.history.go(-1);//表示回到上一级，也就是从哪来的，登录成功后就调回哪
                    return '';
                }
              }).catch(err=>{
                  return ''

              })
            }
          });

    };
    render(){
        const { getFieldDecorator } = this.props.form;
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

export default Form.create({ name: 'normal_login' })(connect()(Login));