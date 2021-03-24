import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { responsesService } from '../services/ResponsesService'

export class ResponsesController extends BaseController {
  constructor() {
    super('api/responses')
    this.router
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('/responses', this.createResponse)
      .delete('/responses/:id', this.deleteResponse)
  }

  // NOTE: this is for us to get the testing, and getting premade prompts
  async createResponse(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      return res.send(await responsesService.createResponse(req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteResponse(req, res, next) {
    try {
      return res.send(await responsesService.deleteResponse(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
