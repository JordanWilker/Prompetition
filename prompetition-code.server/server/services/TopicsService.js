import { dbContext } from '../db/DbContext'
// import { BadRequest } from '../utils/Errors'

class TopicsService {
  async getTopic() {
    const topics = await dbContext.Topics.find()
    return topics
  }

  async getTopicById(id) {
    const topic = await dbContext.Topics.find({ _id: id })
    return topic
  }

  async createTopic(body) {
    return await dbContext.Topics.create(body)
  }

  async deleteTopic(id) {
    return await dbContext.Topics.findOneAndDelete({ _id: id })
  }

  async editTopic(id, userId, body) {
    return await dbContext.Topics.findOneAndUpdate({ _id: id, creatorId: userId }, body, { new: true })
  }

  async getDailyChallenge() {
    const res = dbContext.Topics.find({ active: true, challengeStartDate: Date() })
    if (!res) {
      const topics = dbContext.Topics.find({ active: false })
      const topicsLength = topics.length
      const topicPicker = Math.floor(Math.random() * topicsLength)
      topics[topicPicker].active = true
      topics[topicPicker].startChallengeDate = new Date('<YYYY-mm-dd>')
    }
  }
}
export const topicsService = new TopicsService()
