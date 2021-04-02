import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { responsesService } from '../services/ResponsesService'
import { votesService } from '../services/VotesService'

export class ResponsesController extends BaseController {
  constructor() {
    super('api/responses')
    this.router
      .get('/:id/votes', this.getVotesByResponseId)
      .get('', this.getAllResponses)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createResponse)
      .put('/:id', this.editResponse)
      .delete('/:id', this.deleteResponse)
  }

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

  async getVotesByResponseId(req, res, next) {
    try {
      return res.send(await votesService.getVotesByResponseId(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async getAllResponses(req, res, next) {
    try {
      return res.send(await responsesService.getAllResponses)
    } catch (error) {
      next(error)
    }
  }
}
