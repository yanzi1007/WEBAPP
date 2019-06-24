import React from 'react';
import { connect } from 'react-redux';
//用来做轮播图
import { Carousel } from 'antd';

class List extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    componentDidMount (){
        let {bannerData,queryBanner} = this.props;
        if(!bannerData){
            queryBanner()
        }
    }
    render(){
        let {data}=bannerData;
        return <div className='listBox'>
            {/* 轮播图 */}
            <Carousel autoplay>
                    <div><img src="" alt=""/></div>
                    <div><img src="" alt=""/></div>
                    <div><img src="" alt=""/></div>
                    <div><img src="" alt=""/></div>
                </Carousel>
        </div>;
    }
}
export default connect(state=>({...state.course}),action.course)(List); 