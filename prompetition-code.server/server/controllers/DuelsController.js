import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { duelsService } from '../services/DuelsService'
// import { responsesService } from '../services/ResponsesService'

export class DuelsController extends BaseController {
  constructor() {
    super('api/duels')
    this.router
      .get('', this.getDuel)
      .get('/duelwins', this.getDuelWins)
      .get('/test/:id', this.test)
      .get('/:id', this.getDuelById)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('/startDuel', this.startDuel)
      .delete('/:id', this.deleteDuel)
      .put('/:id/a', this.increaseDuelVoteA)
      .put('/:id/b', this.increaseDuelVoteB)
      .put('/:id', this.editDuelBody)
  }

  async getDuel(req, res, next) {
    try {
      return res.send(await duelsService.getDuel())
    } catch (error) {
      next(error)
    }
  }

  async getDuelById(req, res, next) {
    try {
      return res.send(await duelsService.getDuelById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async startDuel(req, res, next) {
    try {
      req.creatorId = req.userInfo.id
      return res.send(await duelsService.startDuel(req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }

  // NOTE: this is for us to get the testing, and getting premade prompts

  async deleteDuel(req, res, next) {
    try {
      return res.send(await duelsService.deleteDuel(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async editDuelBody(req, res, next) {
    try {
      req.creatorId = req.userInfo.id
      return res.send(await duelsService.editDuelBody(req.params.id, req.userInfo.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async increaseDuelVoteA(req, res, next) {
    req.body.creatorId = req.userInfo.id
    return res.send(await duelsService.increaseDuelVoteA(req.params.id))
  }

  async increaseDuelVoteB(req, res, next) {
    return res.send(await duelsService.increaseDuelVoteB(req.params.id))
  }

  async test(req, res, next) {
    return res.send(await duelsService.test(req.params.id))
  }

  async getDuelWins(req, res, next) {
    req.body.creatorId = req.userInfo.id
    return res.send(await duelsService.getDuelWins(req.userInfo.id))
  }
}
