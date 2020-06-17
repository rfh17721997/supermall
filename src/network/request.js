import axios from 'axios'

//方案四
export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //2. axios的拦截器 request(拦截请求) response(拦截响应)
  axios.interceptors.request.use(config =>{
    return config
  },error => {
    console.log(error);
  })

  axios.interceptors.response.use(result =>{
    console.log(result);
    return result.data
  },error => {
    console.log(error);
  })

  //3.发送真正的网络请求
  return instance(config)
}

