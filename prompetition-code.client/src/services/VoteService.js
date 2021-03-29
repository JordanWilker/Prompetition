import { AppState } from '../AppState'
import { Vote } from '../models/Vote'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class VoteService {
  async getVotes(responseId) {
    try {
      const res = await api.get('api/responses/' + responseId + '/votes')
      AppState.votes = res.data
    } catch (err) {
      logger.error('Couldnt retrieve votes \n', err)
    }
  }

  async getAllVotes() {
    try {
      const res = await api.get('api/votes')
      AppState.votes = res.data.map(v => new Vote(v))
    } catch (error) {
      logger.error('Couldnt retrieve votes \n', error)
    }
  }

  async toggleVote(responseId) {
    try {
      this.getVotes(responseId)
    } catch (error) {
      logger.error('Couldnt like this response \n', error)
    }
  }

  async createVote(responseId) {
    try {
      await api.post('api/votes', { responseId: responseId })
      this.getAllVotes()
    } catch (error) {
      logger.error('Couldnt add a vote \n', error)
    }
  }

  async deleteVote(voteId) {
    try {
      await api.delete('api/votes/' + voteId)
      this.getAllVotes()
    } catch (error) {
      logger.error('Couldnt add a vote \n', error)
    }
  }
}

export const voteService = new VoteService()
