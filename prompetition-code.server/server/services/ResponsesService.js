import { dbContext } from '../db/DbContext'
// import { BadRequest } from '../utils/Errors'

class ResponsesService {
  async getResponsesbyTopicId(id, userId) {
    const responses = await dbContext.Responses.find({ topicId: id }).populate('creator')
    const topic = await dbContext.Topics.find({ _id: id })
    if (topic.challengeStartDate + 86400000 < new Date()) {
      const response = responses.find(r => r.creatorId === userId)
      if (userId && response) { return response }
    }
    return responses
  }

  async createResponse(body) {
    return await dbContext.Responses.create(body)
  }

  async deleteResponse(id, userId) {
    return await dbContext.Responses.findOneAndDelete({ _id: id, creatorId: userId })
  }

  async editResponse(id, userId, body) {
    return await dbContext.Responses.findOneAndUpdate({ _id: id, creatorId: userId }, body, { new: true })
  }
}
export const responsesService = new ResponsesService()
