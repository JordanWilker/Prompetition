import { dbContext } from '../db/DbContext'
import { logger } from '../utils/Logger.js'
import { votesService } from './VotesService.js'
// import { BadRequest } from '../utils/Errors'

class TopicsService {
  async getTopic() {
    const topics = await dbContext.Topics.find({ active: true, challengeStartDate: { $lt: Date.parse(new Date().toDateString()) } })
    return topics
  }

  async getAllTopics() {
    const topicsAll = await dbContext.Topics.find()
    return topicsAll
  }

  async getTopicById(id) {
    const topic = await dbContext.Topics.find({ _id: id }).populate('winner')
    return topic
  }

  async createTopic(body) {
    return await dbContext.Topics.create(body)
  }

  async deleteTopic(id) {
    return await dbContext.Topics.findOneAndDelete({ _id: id })
  }

  async editTopic(id, userId, body) {
    return await dbContext.Topics.findOneAndUpdate({ _id: id, creatorId: userId }, body, { new: true })
  }

  async getDailyChallenge() {
    const date = Date.parse(new Date().toDateString())
    // TODO: Only return the user's own response for the daily challenge
    const oldTopic = await dbContext.Topics.find({ active: true, winnerResponseId: undefined })
    for (let i = 0; i < oldTopic.length; i++) {
      if (oldTopic[i].challengeStartDate !== date) {
        const responses = await dbContext.Responses.find({ topicId: oldTopic[i].id })
        // TODO: topic has no responses
        let topScore = 0
        let winners = []
        for (let j = 0; j < responses.length; j++) {
          const votes = await votesService.getVotesByResponseId(responses[j].id)
          if (votes.length > topScore) {
            topScore = votes.length
            winners = [responses[j]._id]
          } else if (votes.length === topScore) {
            winners.push(responses[j]._id)
          }
        }
        logger.log("Winners for yesterday's topic decided:\n", oldTopic[i].body)
        logger.log('Winners:\n', winners)
        oldTopic[i].winnerResponseId = winners
        oldTopic[i].save()
      }
    }

    const res = await dbContext.Topics.findOne({ active: true, challengeStartDate: date })
    if (res === null) {
      const topics = await dbContext.Topics.find({ active: false })
      const topicsLength = topics.length
      const topicPicker = Math.floor(Math.random() * topicsLength)
      topics[topicPicker].active = true
      topics[topicPicker].challengeStartDate = date
      topics[topicPicker].save()
      return topics[topicPicker]
    }
    return res
  }
}
export const topicsService = new TopicsService()
