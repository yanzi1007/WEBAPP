//利用类创建组件，由于创建组件需要用到react，因此需要导入，reactDOM是用来渲染页面
import React from 'react';
//body里面不需要导入boostrap和less，因为在index中导入了，在每个子组件中都可以用
export default class Body extends React.Component {
    //constructor和super里都传如props，目的是为了在任何地方都可以调用props
    constructor(props){
        super(props)
    }
    render(){

        return <div className='panel panel-body'>
            <ul className='list-group'>
                <li className='list-group-item'>
                    <input type="checkbox"/>
                    <span>吃饭</span>
                    <a href="javascript:;" className='btn-danger'>删</a>
                </li>
            </ul>
        </div>
    }
}