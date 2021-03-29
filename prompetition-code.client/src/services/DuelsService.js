// import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class DuelService {
  async startDuel() {
    try {
      return await api.get('api/duels/startDuel')
    } catch (err) {
      logger.error('Couldnt retrieve duels \n', err)
    }
  }

  async getTodaysDuel() {
    return await api.get('api/duels/dailyChallenge')
  }
}

export const duelService = new DuelService()
