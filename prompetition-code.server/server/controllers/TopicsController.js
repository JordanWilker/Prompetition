import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { topicsService } from '../services/TopicsService'
import { responsesService } from '../services/ResponsesService'

export class TopicsController extends BaseController {
  constructor() {
    super('api/topics')
    this.router
      .get('', this.getTopic)
      .get('/:id/responses', this.getResponsesbyTopicId)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createTopic)
      .delete('/:id', this.deleteTopic)
  }

  async getTopic(req, res, next) {
    try {
      return res.send(await topicsService.getTopic())
    } catch (error) {
      next(error)
    }
  }

  async getResponsesbyTopicId(req, res, next) {
    try {
      return res.send(await responsesService.getResponsesbyTopicId({ topicId: req.params.id }))
    } catch (error) {
      next(error)
    }
  }

  // NOTE: this is for us to get the testing, and getting premade prompts
  async createTopic(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      return res.send(await topicsService.createTopic(req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteTopic(req, res, next) {
    try {
      return res.send(await topicsService.deleteTopic(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
