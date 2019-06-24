import React from 'react';
import ReactDOM from 'react-dom';
import boostrap from './static/css/bootstrap.min.css';
import './static/less/todo.less'; //要把todo在bootstrap后面引用，这样在todo里面写的样式会覆盖boostrap带的样式
import qs from 'qs';
import Head from './component/Head.jsx'

ReactDOM.render(<div className='panel panel-default'>
    <Head></Head>
    {/* <Body></Body>
    <Footer></Footer> */}
</div>,document.getElementById('root'))



