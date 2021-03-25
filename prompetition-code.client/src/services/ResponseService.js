import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ResponseService {
  async getResponsesByTopicId(topicId) {
    try {
      const res = await api.get('api/topics/' + topicId + '/responses')
      AppState.responses = res.data
    } catch (err) {
      logger.error('Couldnt retrieve responses \n', err)
    }
  }
}

export const responseService = new ResponseService()
