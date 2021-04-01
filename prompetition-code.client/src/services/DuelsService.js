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

  async getDuels() {
    const res = await api.get('api/duels')
    AppState.duels = res.data.map(d => new Duel(d))
  }

  async test(id) {
    return await api.get(`api/duels/test/${id}`)
  }

  async getDuelById(id) {
    const res = await api.get(`api/duels/${id}`)
    AppState.activeDuel = new Duel(res.data)
  }

  async createUserBody(duel, body) {
    return await api.put(`api/duels/${duel.id}`, body)
  }

  async createDuelVote(duelId) {
    return await api.post('api/duelvotes', { duelId: duelId })
  }

  async increaseDuelVoteA(duelId) {
    await api.put(`api/duels/${duelId}/a`)
    this.getDuelById(duelId)
  }

  async increaseDuelVoteB(duelId) {
    await api.put(`api/duels/${duelId}/b`)
    this.getDuelById(duelId)
  }
}
export const duelService = new DuelService()
