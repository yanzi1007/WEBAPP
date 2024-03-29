/*
 * 真实REACT/VUE项目中，我们会把所有向服务器发送具体请求的操作写在API中（不写在组件内部，方便请求处理的统一管理）
 *
 *   INDEX：是把AXIOS或者FETCH等进行初始处理或者二次封装的地方
 */
import axios from 'axios';//导入axios
import Qs from 'qs';

axios.defaults.baseURL = 'http://localhost:8000'; //服务器的基础地址
axios.defaults.withCredentials = true;//=>允许跨域(并且允许携带COOKIE)
axios.defaults.transformRequest = (data = {}) => Qs.stringify(data);//=>把通过POST/PUT请求主体传给服务器的内容，统一处理为X-WWW-URL-ENCODED格式（xxx=xx&xx=xxx）
axios.interceptors.response.use(result => result.data);//=>响应拦截器:把服务返回的信息中响应主体内容(result.data)拦截返回，以后在THEN中获取的结果就是主体内容
export default axios; //再次导出axios，这个axios是经过二次处理的，以后在别的地方用的都是这个经过处理的axios