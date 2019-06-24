import React from 'react';
import { connect } from 'react-redux';
import {Form,Input,Icon,Row,Col,Select,Checkbox,Button} from 'antd';
const FormItem = Form.Item;
class Register extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    handleSubmit =ev=>{

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
                    {getFieldDecorator('name',{rules:[
                          {
                            required: true,
                            message: 'Please input your name!',
                          }
                    ]})(<Input/>)}
                </FormItem>
                <FormItem {...formItemLayout} label='邮箱'>
                    {getFieldDecorator('email',{rules:[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                          },
                          {
                            required: true,
                            message: 'Please input your E-mail!',
                          }
                    ]})(<Input/>)}
                </FormItem>
                <FormItem {...formItemLayout} label='手机号'>
                    {getFieldDecorator('phone',{rules:[
                          {
                            required: true,
                            message: 'Please input your E-mail!',
                          }
                    ]})(<Input/>)}
                </FormItem>
                <FormItem {...formItemLayout} label='密码'>
                    {getFieldDecorator('passqord',{rules:[
                          {
                            required: true,
                            message: 'Please input your passqord!',
                          },
                          {
                            validator: this.validateToNextPassword,
                          }
                    ]})(<Input type='password'/>)}
                </FormItem>
            </Form>


        </section>;
    }
}
export default From.create()(connect()(Register));