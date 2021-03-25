import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class VoteService {
  async getVotes(responseId) {
    try {
      const res = await api.get('api/responses/' + responseId + '/votes')
      console.log(res.data.length)
      return res.data.length
    } catch (err) {
      logger.error('Couldnt retrieve votes \n', err)
    }
  }
}

export const voteService = new VoteService()
