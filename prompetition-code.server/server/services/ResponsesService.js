import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import { logger } from '../utils/Logger'

class ResponsesService {
  async getResponsesByTopicId(id) {
    const responses = await dbContext.Responses.find({ topicId: id }).populate('creator')
    return responses
  }

  async createResponse(body) {
    return await dbContext.Responses.create(body)
  }

  async deleteResponse(id, userId) {
    return await dbContext.Responses.findOneAndDelete({ _id: id, creatorId: userId })
  }

  async editResponse(id, userId, body) {
    const edited = await dbContext.Responses.findOneAndUpdate({ topicId: id, creatorId: userId }, body, { new: true })
    if (!edited) {
      throw new BadRequest("Response didn't edit")
    } else {
      return edited
    }
  }

  async getDailyResponse(body) {
    const response = await dbContext.Responses.findOne({ topicId: body.topicId, creatorId: body.creatorId })
    return response
  }

  async getAllResponses() {
    try {
      return await dbContext.Responses.find().populate('topicId creator')
    } catch (error) {
      logger.log(error)
    }
  }
}
export const responsesService = new ResponsesService()
