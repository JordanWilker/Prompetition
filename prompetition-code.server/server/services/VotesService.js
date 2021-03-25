import { dbContext } from '../db/DbContext'
// import { BadRequest } from '../utils/Errors'

class VotesService {
  async getVotesByResponseId(id) {
    const votes = await dbContext.Votes.find({ responseId: id })
    return votes
  }

  async createVote(body) {
    return await dbContext.Votes.create(body)
  }

  async deleteVote(id, userId) {
    return await dbContext.Votes.findOneAndDelete({ _id: id, creatorId: userId })
  }
}

export const votesService = new VotesService()
