
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { votesService } from '../services/VotesService'

export class VotesController extends BaseController {
  constructor() {
    super('api/votes')
    this.router
      .get('', this.getAllVotes)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createVote)
      .delete('/:id', this.deleteVote)
  }

  async createVote(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      return res.send(await votesService.createVote(req.body))
    } catch (error) {
      next(error)
    }
  }

  async getAllVotes(req, res, next) {
    try {
      return res.send(await votesService.getAllVotes())
    } catch (error) {
      next(error)
    }
  }

  async deleteVote(req, res, next) {
    try {
      return res.send(await votesService.deleteVote(req.params.id, req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }
}
