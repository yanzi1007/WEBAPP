import React from 'react';
import { connect } from 'react-redux';
import {Form,Input,Icon,Row,Col,Select,Checkbox,Button} from 'antd';
import md5 from 'blueimp-md5';
const FormItem = Form.Item;
class Register extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    handleSubmit =ev=>{
        ev.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
               values.password=md5(values.password);
        }
    });

    };
    render(){
        const {getFieldDecorator} =this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
        return <section className='personLoginBox'>
        <Form onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label='用户名'>
                {getFieldDecorator('name', {
                    rules: [
                        {required: true, message: '请输入用户名!'}
                    ]
                })(<Input/>)}
            </FormItem>

            <FormItem {...formItemLayout} label='邮箱'>
                {getFieldDecorator('email', {
                    rules: [
                        {required: true, message: '请输入邮箱!'},
                        {type: 'email', message: '输入的邮箱格式不正确!'}
                    ]
                })(<Input/>)}
            </FormItem>

            <FormItem {...formItemLayout} label='手机号'>
                {getFieldDecorator('phone', {
                    rules: [
                        {required: true, message: '请输入手机号!'}
                    ]
                })(<Input/>)}
            </FormItem>

            <FormItem {...formItemLayout} label='密码'>
                {getFieldDecorator('password', {
                    rules: [
                        {required: true, message: '请输入密码!'}
                    ]
                })(<Input type='password'/>)}
            </FormItem>

            <FormItem>
                <Button type="primary" htmlType="submit">立即注册</Button>
            </FormItem>
        </Form>
    </section>;
    }
}
export default Form.create()(connect()(Register));