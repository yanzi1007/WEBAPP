import React from 'react';
import { connect } from 'react-redux';
import {Menu} from 'antd';
import '../static/css/Mycourse.css';
class Mycourse extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div className='MycourseBox'>
            <Menu></Menu>
        </div>;
    }
}
export default connect()(Mycourse);