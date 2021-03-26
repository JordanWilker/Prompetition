export class Vote {
  constructor(data = {}) {
    this.responseId = data.responseId || 'unknown id'
    this.creatorId = data.creatorId || 'unknown creator'
  }
}
