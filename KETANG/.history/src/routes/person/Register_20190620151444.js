import React from 'react';
import { connect } from 'react-redux';
import {Form,Input,Button,Modal} from 'antd';
import md5 from 'blueimp-md5';
//从api文件夹中导入发送注册数据请求的方法
import {register} from '../../api/person';
import action from '../../store/action/index';
const FormItem = Form.Item;
function registerFail() {
    const modal = Modal.error({
        title: '注册失败',
        content: '请稍后重新尝试',
      });
}
class Register extends React.Component{
    constructor(props,context){
        super(props,context);
    } 
    handleSubmit =ev=>{
        ev.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
        if (!err) {
               values.password=md5(values.password);
               let result=await register(values);
               if(parseFloat(result.code)===0){
                   this.props.queryBaseInfo();
                   this.props.history.push('/person');
                   return;
               }
               registerFail();//注册失败执行registerFail弹出错误提示框

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
export default Form.create()(connect(state=>({...state.person}) , action.person)(Register));