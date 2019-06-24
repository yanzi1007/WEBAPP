import React from 'react';
import { connect } from 'react-redux';
import action from '../../store/action/index';
import CourseItem from './CourseItem';
import {Alert, Divider} from 'antd';

class Unpay extends React.Component{
    constructor(props,context){
        super(props,context);
        
    }
    render(){
        let {unpay} = this.props.shopCart;
        if(unpay.length===0){
            return <Alert description='购物车空空如也，快去加入购物车吧' type='warning' style={{marginTop:'0.4rem'}} />
        }
        return <div>
            {/* 全选/全不选按钮 */}
            <div style={{marginTop:'.28rem'}}>
                <input type="checkbox"/>全选和全不选
            </div>
            <ul className='courseItem'>
            {
                unpay.map((item,index)=>{
                    return <CourseItem key={index}item={item}></CourseItem>
                })
            }
           
        </ul>
        </div>
        
    }
}
export default connect(state=>state.course,action.course)(Unpay); 