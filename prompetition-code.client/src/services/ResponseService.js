import { AppState } from '../AppState'
import { Response } from '../models/Response'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ResponseService {
  async getResponsesByTopicId(topicId) {
    try {
      const res = await api.get('api/topics/' + topicId + '/responses')
      AppState.responses = res.data.map(r => new Response(r))
      AppState.respondedToday = (!AppState.responses[0] === '')
      console.log("Topic's response", AppState.responses[0].body)
    } catch (err) {
      logger.error('Couldnt retrieve responses \n', err)
    }
  }

  async createResponse(response) {
    try {
      console.log(response)
      await api.post('api/responses/', response)
      this.getResponsesByTopicId(response.topicId)
    } catch (error) {
      logger.error(error)
    }
  }

  async editResponse(response) {
    try {
      //
    } catch (error) {
      logger.error(error)
    }
  }
}

export const responseService = new ResponseService()
