import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'

const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'

const instance = axios.create({
  // TODO 1: 基礎地址,超時時間
  baseURL,
  timeout: 10000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (res) {
    // 2xx 范围内的状态码都会触发该函数。
    if (res.data.code === '1') {
      return res
    }
    // 處理業務失敗, 給錯誤題是, 拋出錯誤
    ElMessage.error(res.data.message || '服務異常')
    return Promise.reject(res.data)
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数
    // TODO 5: 處理401錯誤
    // 錯誤的特殊情況 => 401 權限不足 或 token 過期 => 攔截到登入
    if (error.response?.status === 401) {
      router.push('/login')
    }
    // 錯誤的默認情況 => 只要給提示
    ElMessage.error(error.response?.data.message || '服務異常')
    return Promise.reject(error)
  }
)

export default instance
export { baseURL }
