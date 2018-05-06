import fly from 'flyio'
// 定义公共headers
fly.config.headers = {
  'Access-Control-Allow-Origin': '*'
}
// 设置超时
fly.config.timeout = 10000
// 设置请求基地址
fly.config.baseURL = 'http://www.hlcnyp.cn'

export default fly
