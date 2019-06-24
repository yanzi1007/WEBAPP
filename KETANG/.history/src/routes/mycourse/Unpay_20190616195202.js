import React from 'react';
import { connect } from 'react-redux';
import action from '../../store/action/index';
import CourseItem from './CourseItem';
import {Alert, Divider,Button} from 'antd';
import {removeShopCart,payShopCart} from '../../api/course'
import {checkLogin} from '../../api/person'

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
        });
        //没要要删除的信息，则直接返回
        if(selectIDList.length===0) return;
        //接下来根据被选中的id发删除的请求，等所有的被选中的选项都删除完才更新容器中的状态信息
        //用Promise.all()来发送删除所有的选中的项的请求,但Promise.all()中放的是promise实例数组，所有先
        //用removeShopCart(id)将selectIDList的每一项都变为promise实例，再存回去
        selectIDList=selectIDList.map(courseID=>{
            return removeShopCart(courseID)
        });
        Promise.all(selectIDList).then(()=>{
            //成功后通过dispatch派发更改容器中的信息
            this.props.queryUnpay();
        })

    };
    handlePay=async ()=>{
        //验证当前是否登录
        let result = await checkLogin();
        if(parseFloat(result.code)!==0){
            alert('请先登录')
            return;
        }
        


    }
}
export default connect(state=>state.course,action.course)(Unpay); 