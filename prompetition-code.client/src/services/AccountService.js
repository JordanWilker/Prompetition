import { AppState } from '../AppState'
import { User } from '../models/User.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async getUser(id) {
    try {
      const res = await api.get('/account/' + id)
      AppState.activeUserView = new User(res.data)
    } catch (err) {
      logger.error(err)
    }
  }
}

export const accountService = new AccountService()
