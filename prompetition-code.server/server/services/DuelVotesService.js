import { dbContext } from '../db/DbContext'
// import { BadRequest } from '../utils/Errors'

class DuelVotesService {
  async getDuelVotesByDuelId(id) {
    const votes = await dbContext.Votes.find({ responseId: id })
    return votes
  }

  async createDuelVote(body) {
    return await dbContext.DuelVotes.create(body)
  }

  async deleteDuelVote(id, userId) {
    return await dbContext.DuelVotes.findOneAndDelete({ _id: id, creatorId: userId })
  }

  async getAllDuelVotes() {
    return await dbContext.DuelVotes.find().populate('creator')
  }
}

export const duelVotesService = new DuelVotesService()
