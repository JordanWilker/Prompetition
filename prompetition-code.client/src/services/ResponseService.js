import { AppState } from '../AppState'
import { Response } from '../models/Response'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ResponseService {
  async getResponsesByTopicId(topicId) {
    try {
      const res = await api.get('api/topics/' + topicId + '/responses')
      AppState.responses = res.data.map(r => new Response(r))
      // console.log("Topic's responses", AppState.responses)
      // console.log('My response:')
      AppState.myResponse = AppState.responses.find(r => r.creator.id === AppState.account.id)
      // console.log(AppState.myResponse)
    } catch (err) {
      logger.error("Couldn't retrieve responses \n", err)
    }
  }

  async createResponse(response) {
    try {
      console.log('ResponseService.createResponse:', response)
      await api.post('api/responses/', response)
      this.getResponsesByTopicId(response.topicId)
    } catch (error) {
      logger.error(error)
    }
  }

  async editResponse(response) {
    try {
      console.log('ResponseService.editResponse:', response)
      await api.put('api/responses/' + response.topicId, response)
      // console.log(res)
      this.getResponsesByTopicId(response.topicId)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const responseService = new ResponseService()
