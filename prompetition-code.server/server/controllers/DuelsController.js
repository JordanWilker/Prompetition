import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { duelsService } from '../services/DuelsService'
// import { responsesService } from '../services/ResponsesService'

export class DuelsController extends BaseController {
  constructor() {
    super('api/duels')
    this.router
      .get('', this.getDuel)
      .get('/startDuel', this.startDuel)
      .get('/:id', this.getDuelById)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .delete('/:id', this.deleteDuel)
      .put('/:id', this.editDuel)
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
      return res.send(await duelsService.startDuel())
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

  async editDuel(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      return res.send(await duelsService.editDuel(req.params.id, req.userInfo.id, req.body))
    } catch (error) {
      next(error)
    }
  }
}
