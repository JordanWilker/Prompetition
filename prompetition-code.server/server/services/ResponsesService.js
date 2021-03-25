import { dbContext } from '../db/DbContext'
// import { BadRequest } from '../utils/Errors'

class ResponsesService {
  async getResponsesbyTopicId(id) {
    const responses = await dbContext.Responses.find({ topicId: id }).populate('creator')
    return responses
  }

  async createResponse(body) {
    return await dbContext.Responses.create(body)
  }

  async deleteResponse(id) {
    return await dbContext.Responses.findOneAndDelete({ _id: id })
  }
}
export const responsesService = new ResponsesService()
