import { dbContext } from '../db/DbContext'
// import { BadRequest } from '../utils/Errors'

class TopicsService {
  async getTopic() {
    const topics = await dbContext.Topics.find()
    return topics
  }

  async createTopic(body) {
    return await dbContext.Topics.create(body)
  }

  async deleteTopic(id) {
    return await dbContext.Topics.findOneAndDelete({ _id: id })
  }
}
export const topicsService = new TopicsService()
