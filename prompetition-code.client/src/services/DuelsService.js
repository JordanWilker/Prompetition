import { AppState } from '../AppState'
import router from '../router'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { Duel } from '../models/Duel'

class DuelService {
  async startDuel() {
    try {
      const res = await api.post('api/duels/startDuel')
      router.push({ name: 'Duels', params: { id: res.data.id } })
    } catch (err) {
      logger.error('Couldnt retrieve duels \n', err)
    }
  }

  async getTodaysDuel() {
    return await api.get('api/duels/dailyChallenge')
  }

  async test(id) {
    return await api.get(`api/duels/test/${id}`)
  }

  async getDuelById(id) {
    const res = await api.get(`api/duels/${id}`)
    AppState.activeDuel = new Duel(res.data[0])
  }
}
export const duelService = new DuelService()
