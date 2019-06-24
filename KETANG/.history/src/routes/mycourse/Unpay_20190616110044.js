import React from 'react';
import { connect } from 'react-redux';
import action from '../../store/action/index';
import CourseItem from './CourseItem';
import {Alert} from 'antd';

class Unpay extends React.Component{
    constructor(props,context){
        super(props,context);
        
    }
    render(){
        let unpay = this.props.shopCart;
        
        return <ul className='courseItem'>
            {
                unpay.map((item,index)=>{
                    return <CourseItem key={index}item={item}></CourseItem>
                })
            }
           
        </ul>;
    }
}
export default connect(state=>state.course,action.course)(Unpay); 