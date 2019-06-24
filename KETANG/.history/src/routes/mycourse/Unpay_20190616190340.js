import React from 'react';
import { connect } from 'react-redux';
import action from '../../store/action/index';
import CourseItem from './CourseItem';
import {Alert, Divider,Button} from 'antd';
import {removeShopCart,payShopCart} from '../../api/course'

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
            {/* 全选/全不选按钮，按钮里也有onChange函数，执行handleSelect传的是all*/}
            <div style={{marginTop:'.28rem',
            height:'.7rem',
            lineHeight:'.7rem',
            padding:'0 .1rem'
            }}>
                <input type="checkbox" checked={this.props.selectAll} onChange={this.props.handleSelect.bind(this,'all')}/>全选和全不选
                <Button type='dashed' onClick={this.handleRemove}>删除</Button>
                <Button type='dashed' onClick={this.handlePay}>支付</Button>
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
    handleRemove=()=>{
        //获取redux容器中所有被选中的选项的id
        let selectIDList=[]; //用来存所有被选中选项的id
            this.props.shopCart.unpay.forEach(item=>{
                if(item.check){
                    selectIDList.push(item.id)
                }

        })

    };
    handlePay=()=>{

    }
}
export default connect(state=>state.course,action.course)(Unpay); 