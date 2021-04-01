
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { duelVotesService } from '../services/DuelVotesService'

export class DuelVotesController extends BaseController {
  constructor() {
    super('api/duelvotes')
    this.router
      .get('', this.getAllDuelVotes)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createDuelVote)
      .delete('/:id', this.deleteDuelVote)
  }

  async createDuelVote(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      return res.send(await duelVotesService.createDuelVote(req.body))
    } catch (error) {
      next(error)
    }
  }

  async getAllDuelVotes(req, res, next) {
    try {
      return res.send(await duelVotesService.getAllDuelVotes())
    } catch (error) {
      next(error)
    }
  }

  async deleteDuelVote(req, res, next) {
    try {
      return res.send(await duelVotesService.deleteDuelVote(req.params.id, req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }
}
