import {
  AppState
} from '../AppState'
import {
  logger
} from '../utils/Logger'
import {
  api
} from './AxiosService'
import {
  Topic
} from '../models/Topic'

class TopicService {
  async getTopics() {
    try {
      const res = await api.get('api/topics')
      AppState.topics = res.data.map(t => new Topic(t))
    } catch (err) {
      logger.error('Couldnt retrieve topics \n', err)
    }
  }
}

export const topicService = new TopicService()
