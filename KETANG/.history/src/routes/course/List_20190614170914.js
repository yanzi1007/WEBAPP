import React from 'react';
import { connect } from 'react-redux';
//用来做轮播图
import { Carousel,Icon,Button } from 'antd';
import {Link} from 'react-router-dom'
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
    //根据courseType的不同，在h2里显示不同的字
    queryType=()=>{
        let {courseType}=this.props,text='全部课程';
        switch(courseType){
            case 'react':
                text='REACT开发课程'
            break;
            case 'vue':
                text='Vue开发课程'
            break;
            case 'xiaochengxu':
                text='小程序开发课程'
            break;
        }
        return text;
    }
    render(){
        let {bannerData,courseType,courseData}=this.props;
    
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
            {/* 数据列表 */}
            <div className="courseList">
                <h2><Icon type='menu-fold'/>{this.queryType}</h2>
                <ul>
                    <li>
                        <Link to={
                            {
                                pathname:'/course/info',
                                search:'?courseId=1'
                            }
                        }>
                            <h3>REACT全栈开发课程第186课时</h3>
                            <div className='content'>
                                <div className='pic'> 
                                    <img src="" alt=""/>
                                </div>
                                <div className='desc'>
                                    <p>课程描述</p>
                                    <p>时间：1小时</p>
                                </div>
                            </div>
                        </Link>   
                    </li>

                    <li>
                        <Link to={
                            {
                                pathname:'/course/info',
                                search:'?courseId=2'
                            }
                        }>
                            <h3>REACT全栈开发课程第186课时</h3>
                            <div className='content'>
                                <div className='pic'> 
                                    <img src="" alt=""/>
                                </div>
                                <div className='desc'>
                                    <p>课程描述</p>
                                    <p>时间：1小时</p>
                                </div>
                            </div>
                        </Link>   
                    </li>
                    <Button type='dashed'>加载更多</Button>
                </ul>
            </div>
            
        </div>;
    }
}
export default connect(state=>({...state.course}),action.course)(List); 