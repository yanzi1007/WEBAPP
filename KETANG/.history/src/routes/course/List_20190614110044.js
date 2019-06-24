import React from 'react';
import { connect } from 'react-redux';
//用来做轮播图
import { Carousel } from 'antd';
import action from '../../store/action/index';

class List extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    async componentDidMount (){
        let {bannerData,queryBanner} = this.props;
        if(!bannerData || bannerData.length===0){
            queryBanner();
        }
    }
    render(){
        let {bannerData}=this.props;
    
        return <div className='listBox'>
            {/* 如果拿到的数据不为空，则展示轮播图数据 */}
            {bannerData && bannerData.length!==0 ? (<Carousel autoplay>
                {
                    bannerData.map((item,index)=>{
                        let {name,pic}=item;
                        return <div key={index}>
                            <img src={pic} alt={name}/>
                        </div>
                    })
                }
            </Carousel>):''}
            
        </div>;
    }
}
export default connect(state=>({...state.course}),action.course)(List); 