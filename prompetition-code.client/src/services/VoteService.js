import { AppState } from '../AppState'
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

  async toggleVote(responseId) {
    try {
      this.getVotes(responseId)
    } catch (error) {
      logger.error('Couldnt like this response \n', error)
    }
  }
}

export const voteService = new VoteService()
