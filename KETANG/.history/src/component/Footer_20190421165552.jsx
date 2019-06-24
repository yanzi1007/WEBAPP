//利用类创建组件，由于创建组件需要用到react，因此需要导入，reactDOM是用来渲染页面
import React from 'react';
//footer里面不需要导入boostrap和less，因为在index中导入了，在每个子组件中都可以用
export default class Head extends React.Component {
    //constructor和super里都传如props，目的是为了在任何地方都可以调用props
    constructor(props){
        super(props)
        this.state={};
    }
    render(){

        return <div className='panel panel-heading'>
            <h3 className='panel-title'>
            任务列表[ 当前未完成的任务数 <span className='count'>0</span>]
            </h3>
            <input type="text" className='form-control' placeholder='please enter the task to be completed' />
        </div>
    }
}