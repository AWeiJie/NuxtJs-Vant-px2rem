import axios from 'axios'
import { BASEURL } from '~/common/config/config.default'
import Toast from 'vant/lib/toast'
// import $utils from '~/common/utils/utils'

// 统一请求封装处理
const options = {
  baseURL: '',
  timeout: 30000 // 30秒超时
}
const SERVER_PORT = 3000

const showTipsMsg = (type, msg) => {
  if (process.server) {
    // 如果是服务端渲染 应该是记录日志或者其他
    console.log(msg)
  } else {
    Toast(msg)
    console.log(
      '----------------------------------------------------------------------'
    )
    // console.log('xxxxxxxxxxxxxxxx', $utils.getcookiesInClient())
  }
}

// 判断是否服务端渲染
if (process.server) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env
    .PORT || SERVER_PORT}`
} else {
  options.baseURL = ''
}

// create an axios instance
const apiService = axios.create(options)

// 响应处理
const checkResponst = response => {
  if (!response) {
    showTipsMsg('error', '网络请求异常')

    return Promise.reject('error')
  }

  const res = response.data || {}
  const status = response.status

  if (status !== 200) {
    console.log(response.status, 'response.statusresponse.status')
    switch (response.status) {
      case 500:
        // 后端响应数据
        showTipsMsg(
          'warning',
          res.errmsg || res.message || '服务器异常，请稍后重试'
        )
        break
      case 404:
        showTipsMsg('warning', '找不到请求资源')
        break
      case 401:
        showTipsMsg('warning', '请先登录')
        // 跳转到登录页
        break
      default:
        showTipsMsg('warning', '操作失败，请稍后重试.')
        break
    }

    return Promise.reject(response)
  } else if (status === 200) {
    return res
  }
}

// 请求拦截加token
apiService.interceptors.request.use(
  config => {
    // 设置全局配置
    config.headers = {
      ...config.headers,
      'Request-platform': 'H5-Seo',
      baseUrl: BASEURL
    }
    // 正式
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnZvZGVzaG9wLmNvbVwvYXBpXC9hdXRoXC9sb2dpblwvbW9iaWxlLXB3ZCIsImlhdCI6MTU5NDk3NzkwMCwiZXhwIjoxNTk2MTg3NTAwLCJuYmYiOjE1OTQ5Nzc5MDAsImp0aSI6IkV4czZyZVJvbWRGRTNQSGEiLCJzdWIiOjMyODYxNjksInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.4rs0pY8g7_NXp819N-OZbFLzYcEdW0O-9rKnMiyQAbU'
    //    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnZvZGVzaG9wLmNvbVwvYXBpXC9hdXRoXC9sb2dpblwvbW9iaWxlLXB3ZCIsImlhdCI6MTU5NDAyNDQ5MSwiZXhwIjoxNTk1MjM0MDkxLCJuYmYiOjE1OTQwMjQ0OTEsImp0aSI6ImlwZ1BidWJDU1ZPOWpld3AiLCJzdWIiOjgwMSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.9vS0hTxEvMbGgNqH9MTZi05pbRoqgWg4PT_9UPCvasM'
    // 测试
    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdC5hcGkudm9kZXNob3AuY29tXC9hcGlcL2F1dGhcL2xvZ2luXC9tb2JpbGUiLCJpYXQiOjE1OTQ3MTk1ODIsImV4cCI6MTU5NTkyOTE4MiwibmJmIjoxNTk0NzE5NTgyLCJqdGkiOiJKbGV3MXB2cTcyRkswSmhIIiwic3ViIjoyNDczOTAsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.QUVX8h4W7j9IDJM8REjWBB0Vz1NMi7PbpGBzNUxIYQA';

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// apiService.interceptors.request.use(
//     config =>
//         // Do something before request is sentzq
//         // let url = config.url;
//         // if (!url.startsWith('https://') && !url.startsWith('http://')) {
//         // 	url = evnCfg.host + url;
//         // }
//         // const token = authService.getTokenStr();
//         // // console.log(token);
//         // config.url = url;
//         // let isAuthorization = config.sendToken;
//         // if (isAuthorization !== false) {
//         // 	isAuthorization = true;
//         // }
//         // if (isAuthorization) {
//         // 	config.headers.Authorization = `Bearer ${token}`;
//         // }

//         config,
//     error => {
//         // Do something with request error
//         console.log('error====================================', error); // for debug
//         Promise.reject(error);
//     }
// );

// 响应拦截
apiService.interceptors.response.use(
  response => checkResponst(response),
  error => {
    console.log('err---->' + error) // for debug
    const response = error.response

    return checkResponst(response)
  }
)

// 添加自定义头部信息

class RequestService {
  constructor() {
    this.options = options
  }

  /**
   * 处理GET
   * @param {*} url URL
   * @param {*} config 配置
   */
  get(url, data = {}, config = {}) {
    return apiService.get(url, { params: data, ...config })
  }

  /**
   * 处理POST
   * @param {*} url URL
   * @param {*} data 参数
   * @param {*} config 配置
   */
  post(url, data = {}, config = {}) {
    return apiService.post(url, data, config)
  }

  /**
   * 处理put
   * @param {*} url URL
   * @param {*} data 参数
   * @param {*} config 配置
   */
  put(url, data = {}, config = {}) {
    return apiService.put(url, data, config)
  }

  /**
   * 处理delete
   * @param {*} url URL
   * @param {*} data 参数
   * @param {*} config 配置
   */
  delete(url, data = {}, config = {}) {
    return apiService.delete(url, (config = {}))
  }
}

export default RequestService
