import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { topicsService } from '../services/TopicsService'
import { responsesService } from '../services/ResponsesService'
import { duelsService } from '../services/DuelsService'

export class TopicsController extends BaseController {
  constructor() {
    super('api/topics')
    this.router
      .get('', this.getTopic)
      .get('/dailyChallenge', this.getDailyChallenge)
      .get('/all', this.getAllTopics)
      .get('/:id', this.getTopicById)
      .get('/:id/responses', this.getResponsesByTopicId)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/dailyChallenge/response', this.getDailyChallengeResponse)
      .post('', this.createTopic)
      .post('/duels', this.getDuel)
      .delete('/:id', this.deleteTopic)
      .put('/:id', this.editTopic)
  }

  async getTopic(req, res, next) {
    try {
      return res.send(await topicsService.getTopic())
    } catch (error) {
      next(error)
    }
  }

  async getAllTopics(req, res, next) {
    try {
      return res.send(await topicsService.getAllTopics())
    } catch (error) {
      next(error)
    }
  }

  async getDuel(req, res, next) {
    try {
      return res.send(await duelsService.createDuel())
    } catch (error) {
      next(error)
    }
  }

  async getTopicById(req, res, next) {
    try {
      return res.send(await topicsService.getTopicById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async getResponsesByTopicId(req, res, next) {
    try {
      return res.send(await responsesService.getResponsesByTopicId(req.params.id))
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

  async editTopic(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      return res.send(await topicsService.editTopic(req.params.id, req.userInfo.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async getDailyChallenge(req, res, next) {
    try {
      return res.send(await topicsService.getDailyChallenge())
    } catch (error) {
      next(error)
    }
  }

  async getDailyChallengeResponse(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const topic = await topicsService.getDailyChallenge()
      req.body.topicId = topic._id
      return res.send(await responsesService.getDailyResponse(req.body))
    } catch (error) {
      next(error)
    }
  }
}
