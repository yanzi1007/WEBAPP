import React from 'react';
import { connect } from 'react-redux';
class Tip extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div>未登录的提示信息</div>;
    }
}
export default connect()(Tip);