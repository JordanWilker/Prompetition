import { AppState } from '../AppState'
import { Topic } from '../models/Topic'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class TopicService {
  async getTopics() {
    try {
      const res = await api.get('api/topics')
      AppState.topics = res.data.map(t => new Topic(t))
    } catch (err) {
      logger.error('Couldnt retrieve topics \n', err)
    }
  }

  async getTodaysTopic() {
    const res = await api.get('api/topics/dailyChallenge')
    AppState.todaysTopic = new Topic(res.data)
  }
}

export const topicService = new TopicService()
