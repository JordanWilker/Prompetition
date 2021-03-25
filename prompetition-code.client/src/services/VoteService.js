import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class VoteService {
  async getVotes() {
    try {
      const res = await api.get('api/votes')
      return res.data.length
    } catch (err) {
      logger.error('Couldnt retrieve votes \n', err)
    }
  }
}

export const voteService = new VoteService()
