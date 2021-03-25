import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .get('/:id', this.getUserProfile)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .put('', this.editUserAccount)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getUserProfile(req, res, next) {
    try {
      const user = await accountService.getAccount({ id: req.params.id })
      res.send(user)
    } catch (error) {
      next(error)
    }
  }

  async editUserAccount(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const user = await accountService.updateAccount({ id: req.body.creatorId }, { name: req.body.name })
      res.send(user)
    } catch (error) {
      next(error)
    }
  }
}
