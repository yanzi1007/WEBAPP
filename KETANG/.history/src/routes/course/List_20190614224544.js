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
    componentWillReceiveProps(){
        //在当前案例中，触发这个声明周期函数，说明传递给组件的属性改变了，而有两种方式可能使得传给组件的属性改变
       //第一种是容器中的状态改变，也就是store改变，而我们又把store当做属性传给了组件，所以状态改变也就改变了属性
        //第二种是路由切换会改变属性，因为受路由管控的组件的属性上有location属性，location属性又有一个pathName属性，当路由切换，这个属性一定会改变，所以路由切换属性改变了
       this.setState({isLoading:false})
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
        let {queryList,courseData,courseType} = this.props;
        //防止重复点击
        if(this.state.isLoading) return;
        this.setState({isLoading:true});//点击时，让加载的圈圈转起来
        
        //重新发送dispatch（page是在当前page的基础上累加1，type继续用当前的类型）
        queryList({
            page:courseData.page+1,
            type:courseType,
            flag:'push'
        })
    }
    render(){
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
                {/* 当total的值小于page的值（数据没加载完）才有按钮，加载完了就没按钮 */}
            {
                courseData.page<=courseData.total?(<Button type='dashed' onClick={this.loadMore} loading={this.state.isLoading}>加载更多</Button>)
            :''}</div>:'暂无数据'}  
            </div>
            
        </div>;
    }
}
export default connect(state=>({...state.course}),action.course)(List); 