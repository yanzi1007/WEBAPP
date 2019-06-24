import React from 'react';
import { connect } from 'react-redux';
import action from '../../store/action/index';


class Pay extends React.Component{
    constructor(props,context){
        super(props,context);
        
    }
    render(){
       
        return <div>
           未支付
        </div>;
    }
}
export default connect(state=>state.course,action.course)(Pay); 