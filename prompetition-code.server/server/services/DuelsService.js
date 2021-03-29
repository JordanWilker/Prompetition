import { dbContext } from '../db/DbContext'
import socketService from '../services/SocketService'
import { logger } from '../utils/Logger'
// import { BadRequest } from '../utils/Errors'

class DuelsService {
  async getDuel() {
    const duel = await dbContext.Duels.find()
    return duel
  }

  async getDuelById(id) {
    const duel = await dbContext.Duels.find({ _id: id })
    return duel
  }

  async createDuel() {
    const duels = await dbContext.Topics.find({ active: false })
    const duelsLength = duels.length
    const duelPicker = Math.floor(Math.random() * duelsLength)
    const duelBody = duels[duelPicker].body
    return await dbContext.Duels.create({ body: duelBody })
  }

  async deleteDuel(id) {
    return await dbContext.Duels.findOneAndDelete({ _id: id })
  }

  async editDuel(id, userId, body) {
    return await dbContext.Duels.findOneAndUpdate({ _id: id, creatorId: userId }, body, { new: true })
  }

  async startDuel() {
    const duels = await dbContext.Topics.find({ active: false })
    const duelsLength = duels.length
    const duelPicker = Math.floor(Math.random() * duelsLength)
    const duelBody = duels[duelPicker].body
    const duel = await dbContext.Duels.create({ body: duelBody })
    socketService.messageRoom('general', 'get:duel', duel)
    logger.log('howdy??')
    logger.log(duelBody)
    return duel
  }
}
export const duelsService = new DuelsService()
