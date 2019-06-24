//利用类创建组件，由于创建组件需要用到react，因此需要导入，reactDOM是用来渲染页面
import React from 'react';
import {connect} from 'react-redux';
import action from '../store/action';
//body里面不需要导入boostrap和less，因为在index中导入了，在每个子组件中都可以用
class Body extends React.Component {
    //constructor和super里都传如props，目的是为了在任何地方都可以调用props
    constructor(props){
        super(props)
        this.state={};
    }
    render(){
//复选框的name用于分组name
        return <div className='panel panel-body'>
            <ul className='list-group'>
                <li className='list-group-item'>
                    <input type="checkbox" name=''todo/> 
                    <span>吃饭</span>
                    <a href="javascript:;" className='btn-danger'>删</a>
                </li>
            </ul>
        </div>
    }
}
export default connect(state=>({...state.todo}),action.todo)(Body);