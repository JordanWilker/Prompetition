import { dbContext } from '../db/DbContext'
import socketService from '../services/SocketService'
import { logger } from '../utils/Logger'
import { BadRequest } from '../utils/Errors'

class DuelsService {
  async getDuel() {
    const duel = await dbContext.Duels.find().populate('creator')
    return duel
  }

  async getDuelById(id) {
    const duel = await dbContext.Duels.findOne({ _id: id })
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

  async editDuelBody(id, userId, body) {
    const duel = await dbContext.Duels.findById(id)
    if (!duel) {
      throw new BadRequest('invalid Duel Id')
    }
    if (duel.userA.creatorId === userId) {
      duel.userA.body = body.body
      duel.markModified('userA')
    } else if (duel.userB.creatorId === userId) {
      duel.userB.body = body.body
      duel.markModified('userB')
    } else {
      throw new BadRequest('You are not in this duel')
    }
    await duel.save()
    return duel
  }

  async startDuel(userId) {
    const res = await dbContext.Duels.findOne({ userB: null, 'userA.creatorId': { $ne: userId } })
    logger.log(1)
    if (res === null) {
      const duels = await dbContext.Topics.find({ active: false })
      const duelsLength = duels.length
      const duelPicker = Math.floor(Math.random() * duelsLength)
      const duelBody = duels[duelPicker].body
      const date = new Date().getTime()
      const duel = await dbContext.Duels.create({ body: duelBody, startTime: date, winnerId: 'b', userA: { creatorId: userId } })
      logger.log(2)
      return duel
    } else {
      const join = await dbContext.Duels.findByIdAndUpdate(res._doc._id, { userB: { creatorId: userId } })
      // socketService.messageRoom('general', 'get:duel', join)
      logger.log(3)
      return join
    }
  }

  async test(id) {
    socketService.messageRoom(id, 'get:test')
  }

  async increaseDuelVoteA(id) {
    const res = await dbContext.Duels.findOneAndUpdate({ _id: id }, { $inc: { 'userA.votes': 1 } }, { new: true })
    if (res.startTime <= new Date().getTime() - 86400000) {
      res.votable = false
      res.markModified('votable')
      if (res.userB.votes > res.userA.votes) {
        res.winnerId = res.userB.creatorId
        res.markModified('winnerId')
      } else if (res.userA.votes > res.userB.votes) {
        res.winnerId = res.userA.creatorId
        res.markModified('winnerId')
      } else {
        res.winnerId = 'Tie'
        res.markModified('winnerId')
      }
      res.save()
    }
  }

  async increaseDuelVoteB(id) {
    const res = await dbContext.Duels.findOneAndUpdate({ _id: id }, { $inc: { 'userB.votes': 1 } }, { new: true })
    logger.log(res)
    logger.log(res.startTime)
    logger.log(new Date().getTime())
    if (res.startTime <= new Date().getTime() - 86400000) {
      res.votable = false
      res.markModified('votable')
      await res.save()
      if (res.userB.votes > res.userA.votes) {
        res.winnerId = res.userB.creatorId
        res.markModified('winnerId')
        await res.save()
      } else if (res.userA.votes > res.userB.votes) {
        res.winnerId = res.userA.creatorId
        res.markModified('winnerId')
        await res.save()
      } else {
        res.winnerId = 'Tie'
        res.markModified('winnerId')
        await res.save()
      }
    }
  }

  async getDuelWins(userId) {
    try {
      return await dbContext.Duels.find({ winnerId: userId })
    } catch (error) {
      logger.log(error)
    }
  }
}
export const duelsService = new DuelsService()
