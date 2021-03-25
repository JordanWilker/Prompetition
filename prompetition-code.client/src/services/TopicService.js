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
    // This method sets AppState.todaysTopic to whatever topic was created today.
    try {
      let date = new Date()
      // Reformatting Date() to be able to match it with createdAt
      const rebuiltDate = {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth().toString()[1] ? date.getUTCMonth() + 1 : '0' + parseInt(date.getUTCMonth() + 1),
        day: date.getDate()
      }
      date = rebuiltDate.year + '-' + rebuiltDate.month + '-' + rebuiltDate.day
      const todaysTopic = AppState.topics.filter(t => t.challengeStartDate.substring(0, 9) === date)[0]
      if (!todaysTopic) {
        console.log('No prompt for today')
      } else {
        AppState.todaysTopic = todaysTopic
      }
    } catch (error) {
      logger.error('Couldnt get date \n', error)
    }
  }
}

export const topicService = new TopicService()
