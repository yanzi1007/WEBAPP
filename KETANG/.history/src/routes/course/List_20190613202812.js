import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div className='listBox'>
            {/* 轮播图和列表 */}
            <div >

            </div>
        </div>;
    }
}
export default connect()(Home);