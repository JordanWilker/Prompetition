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
    // const res = dbContext.Topics.find({ active: true })
  }
}
export const topicsService = new TopicsService()
