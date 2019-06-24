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
        let {code} = result;
        if(parseFloat(code)===0){
            //校验当期课程是已支付还是未支付或者是未加入购物车
        
            /*在redux容器中的未购买和已购买的集合中查找是否有当前展示的课程，有的话说明已经加入到购物车，没有的话说明未加入*/
            let {pay, unpay} = this.props.shopCart,
                isShop = -1;
                console.log(pay,unpay)
            //=>在REDUX未购买和已购买的集合中筛选是否有当前展示的课程，有的话说明当前课程已经加入到购物车了，没有说明还未加入
            if(unpay.find(item => parseFloat(item.id) === parseFloat(courseId))){
                isShop = 0 
            }
            
            if(pay.find(item => parseFloat(item.id) === parseFloat(courseId))){
                isShop = 1
            } 

            this.setState({
                data: result.data,
                isShop
            });
        }
    }

    render(){
        let {data,isShop} =this.state;
        if(!data) return '';
        return <div className='baseInfo'>
            <video src='http://txycdn.miaopai.com/stream/b7dOr6N54XZ1vluE2cgnaD-fze42y0zHMtITaA___16_0_1508740329.mp4?ssig=95b45dae3e215e0b7618057fcedbcdf6&time_stamp=1560573184862' 
            controls preload='none' poster={data.pic}/>
            <div className='content'>
                <h3>{data.ame}</h3>
                <p>{data.dec}</p>
                <span>课程价格：{data.price}</span>
                {
                    isShop!==1?<Button 
                    type={isShop===-1?'danger':'primary'} 
                    onClick={this.handleShopCart}>{isShop===-1?'加入购物车':'从购物车移除'}
                    </Button>:''
                }
            </div>
        </div>;
    }
    //写成箭头函数，保证这个函数里面的this是当期实例
    handleShopCart=ev=>{
        if(this.state.isShop===-1){
            //还未加入购物车(按钮是加入购物车)
            this.setState({
                isShop:0
            })
            return ;
        }
        //已经加入购物车（按钮是移除购物车）
        this.setState({
            isShop:-1
        })

    }
}
export default connect(state=>state.course,action.course)(Info);