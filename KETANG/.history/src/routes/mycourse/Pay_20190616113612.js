import React from 'react';
import { connect } from 'react-redux';
import action from '../../store/action/index';
import CourseItem from './CourseItem';
import {checkLogin} from '../../api/person';
import {Alert} from 'antd';
import {Link} from 'react-router-dom';

class Pay extends React.Component{
    constructor(props,context){
        super(props,context); 
        this.state={
            isLogin:false
        }  
    }
    async componentDidMount (){
        let result =await checkLogin();
        if(parseFloat(result.code)===0){
            this.setState({
                isLogin:true
            })
        }
    }
    render(){
        if(this.state.isLogin===false){
            return <Link to='/person/login'>
                <Alert type='warning' description='您还未登录，请先登录（点我登录）' 
                style={{marginTop:'0.4rem'}}></Alert>
            </Link>
            
        }
       
        return <ul className='courseItem'>
        {
                this.props.shopCart.pay.map((item,index)=>{
                    return <CourseItem key={index}item={item}></CourseItem>
                })
            }
        </ul>;
    }
}
export default connect(state=>state.course,action.course)(Pay); 