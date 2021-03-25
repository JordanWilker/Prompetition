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

  async getDate() {
    try {
      const date = new Date()
      const rebuiltDate = {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth().toString()[1] ? date.getUTCMonth() + 1 : '0' + parseInt(date.getUTCMonth() + 1),
        day: date.getDate()
      }
      AppState.date = rebuiltDate.year + '-' + rebuiltDate.month + '-' + rebuiltDate.day
    } catch (error) {
      logger.error('Couldnt get date \n', error)
    }
  }
}

export const topicService = new TopicService()
