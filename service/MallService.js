import RequestService from './Request'
import { BASEURL } from '~/common/config/config.default'

class MallService extends RequestService {
  constructor() {
    super()
  }

  // 用户信息
  async getUsersData() {
    return await this.get(`${BASEURL}/api/v1/users`)
  }
}

export default new MallService()
