import { logger } from '../../../server/utils/Logger.js'
import { ProxyState } from '../AppState.js'
import { api } from './AxiosService.js'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      ProxyState.account = res.data
    } catch (err) {
      logger.error(err)
    }
  }
}

export const accountService = new AccountService()
