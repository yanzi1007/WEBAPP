import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div>我是首页</div>;
    }
}
export default connect()(Home);