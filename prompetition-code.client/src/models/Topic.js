export class Topic {
  constructor(data = {}) {
    this.id = data.id || data._id || 'placeholder id'
    this.body = data.body || 'test body'
    this.createdAt = data.createdAt || 'creation date unkown'
    this.challengeStartDate = data.challengeStartDate || 'challenge start date unknown'
    this.winners = data.winner || []
  }

  parseDate(givenTime) {
    const date = new Date(givenTime)
    return date.toString().substring(0, 15)
  }
}
