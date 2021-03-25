import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { responsesService } from '../services/ResponsesService'

export class ResponsesController extends BaseController {
  constructor() {
    super('api/responses')
    this.router
      // .get('/:topicId', this.getResponsesByTopicId)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createResponse)
      .delete('/:id', this.deleteResponse)
      .put('/:id', this.editResponse)
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
      return res.send(await responsesService.deleteResponse(req.params.id, req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }

  async editResponse(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const response = await responsesService.editResponse(req.params.id, req.userInfo.id, req.body)
      res.send(response)
    } catch (error) {
      next(error)
    }
  }

  // async getResponsesByTopicId(req, res, next) {
  //   try {
  //     return res.send(await responsesService.getResponsesbyTopicId(req.params.topicId))
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}
