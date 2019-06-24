import React from 'react';
import { connect } from 'react-redux';
//用来做轮播图
import { Carousel } from 'antd';

class List extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div className='listBox'>
            {/* 轮播图和列表 */}
            <Carousel autoplay>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
        </div>;
    }
}
export default connect()(List);