import React from 'react';
import { connect } from 'react-redux';
import {Button} from 'antd';
import {queryInfo,addShopCart,removeShopCart} from '../../api/course';
import action from '../../store/action/index';
import Qs from 'qs';

class Info extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            data:null,
            isShop:-1//存储是否已经加入购物车信息，-1是还没有加入购物车0是已加入购物车但未支付1是已支付
            //用来标记是否点击了加入购物车这个按钮(也就是是否已经加入到了购物车)根据这个标记改加入购物车这个按钮的的样式（通过属性改变，因为这样会导致组件重新渲染）
        };
    }
    async componentDidMount(){
        //获取courseId，在受路由管控的组件中，属性上会挂载一个location，location中的search就是courseId
        let {location:{search}}=this.props;
        let {courseId=0}=Qs.parse(search.substr(1)) || {};
        //把courseId挂载到实例上，目的是为了让其他方法也可以用，比如在handleShopCart会用到
        this.courseId=courseId
        //发送请求获取信息
        
        let result=await queryInfo(courseId);
        console.log(result)
        if(parseFloat(result.code)===0){
            //校验当期课程是已支付还是未支付或者是未加入购物车
            //更改组件的状态中的data信息，让组件重新渲染，显示最新信息
            this.setState({
                data:result.data
            })
        }
    }

    render(){
        let {data} =this.state;
        if(!data) return '';
        return <div className='baseInfo'>
            <video src='http://txycdn.miaopai.com/stream/b7dOr6N54XZ1vluE2cgnaD-fze42y0zHMtITaA___16_0_1508740329.mp4?ssig=95b45dae3e215e0b7618057fcedbcdf6&time_stamp=1560573184862' 
            controls preload='none' poster={data.pic}/>
            <div className='content'>
                <h3>{data.ame}</h3>
                <p>{data.dec}</p>
                <span>课程价格：{data.price}</span>
                <Button type='danger' onClick={this.handleShopCart}>加入购物车</Button>
            </div>
        </div>;
    }
    //写成箭头函数，保证这个函数里面的this是当期实例
    handleShopCart=ev=>{
        addShopCart

    }
}
export default connect(state=>state.course,action.course)(Info);