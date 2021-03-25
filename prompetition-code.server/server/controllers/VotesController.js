
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { votesService } from '../services/VotesService'

export class VotesController extends BaseController {
  constructor() {
    super('api/votes')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createVote)
  }

  async createVote(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      return res.send(await votesService.createVote(req.body))
    } catch (error) {
      next(error)
    }
  }
}
