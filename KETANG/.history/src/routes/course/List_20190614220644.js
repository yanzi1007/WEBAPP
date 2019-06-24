import React from 'react';
import { connect } from 'react-redux';
//用来做轮播图
import { Carousel,Icon,Button } from 'antd';
import {Link} from 'react-router-dom'
import action from '../../store/action/index';

class List extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            isLoading:false
        }
    }
    async componentDidMount (){
        let {bannerData,queryBanner,courseData,queryList} = this.props;
        if(!bannerData || bannerData.length===0){
            queryBanner();
        }
        if(courseData.data.length===0){
            queryList({});
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
    loadMore=()=>{
        if(this.isRun) return ''; //正在请求就什么都不做，如果不是正在请求，就把this.isRun设为true，下面发射请求
        this.isRun = true; //表示正在请求，完成请求的标志是会把redux容器中的信息更新了，因此会执行render
        let {queryList} = this.props;
        //防止过快点击的处理



    }
    render(){
        this.isRun=false;//点击加载更多，dispatch派发一个任务，通知reducer更改容器中的状态信息，当状态信息更改，会重新渲染组件（也就是重新执行render）,此时
                          //我们把isRun设置为false,这说明当isRun为false时，表示它正在渲染组件
        let {bannerData,courseType,courseData}=this.props;
        let {data}=courseData;
    
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
                <h2><Icon type='menu-fold'/>{this.queryType()}</h2>
                {/* 做判断，如果data不存在就不渲染ul，存在则渲染ul */}
                {data && data.length!==0?
                <div>
                <ul>
                    {
                        data.map((item,index)=>{
                            let {name,pic,dec,id,time}=item;
                            return <li key={index}>
                            <Link to={
                                {
                                    pathname:'/course/info',
                                    search:`?courseId=${id}`
                                }}>
                                <h3>{name}</h3>
                                <div className='content'>
                                    <div className='pic'> 
                                        <img src={pic} alt={name}/>
                                    </div>
                                    <div className='desc'>
                                        <p>{dec}</p>
                                        <p>{time}</p>
                                    </div>
                                </div>
                            </Link>   
                        </li>
                        })
                    }
                </ul>
            <Button type='dashed' onClick={this.loadMore} loading={this.state.isLoading}>加载更多</Button></div>:'暂无数据'}  
            
                
            </div>
            
        </div>;
    }
}
export default connect(state=>({...state.course}),action.course)(List); 