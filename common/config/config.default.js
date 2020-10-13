// 默认使用生产环境配置
const ENVIRONMENT_DEFAULT = {
  imgBaseUrl: 'https://image.v1.vodeshop.com/',
  BASEURL: 'https://api.vodeshop.com',
  WEb_BASEURL: 'https://m.vodeshop.com'
}

// 测试环境配置
const ENVIRONMENT_TEST = {
  imgBaseUrl: 'https://image.v1.vodeshop.com/',
  BASEURL: 'https://test.api.vodeshop.com',
  WEb_BASEURL: 'https://test.m.vodeshop.com'
}

const getEnvironment = function() {
  if (process.env.MODE == 'dev') {
    // 本地启动环境配置
    // return ENVIRONMENT_TEST;
    return ENVIRONMENT_DEFAULT
  } else if (process.env.MODE == 'test') {
    // 测试环境配置
    return ENVIRONMENT_TEST
  } else if (process.env.MODE == 'production') {
    // 生产环境配置
    return ENVIRONMENT_DEFAULT
  } else {
    return ENVIRONMENT_DEFAULT
  }
}

const environment = Object.assign(ENVIRONMENT_DEFAULT, getEnvironment())

let { BASEURL, WEb_BASEURL, imgBaseUrl } = environment

export { BASEURL, WEb_BASEURL, imgBaseUrl }
