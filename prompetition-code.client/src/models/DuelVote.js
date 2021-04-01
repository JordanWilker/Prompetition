export class DuelVote {
  constructor(data = {}) {
    this.duelId = data.duelId || 'unknown id'
    this.creatorId = data.creatorId || 'unknown creator'
    this.creator = data.creator || {}
    this.id = data.id || 'id unknown'
    this.voteTarget = data.voteTarget || 'target unknown'
  }
}
