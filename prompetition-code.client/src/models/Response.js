export class Response {
  constructor(data = {}) {
    this.id = data.id || data._id || 'placeholder id'
    this.body = data.body || 'placeholder body'
    this.topicId = data.topicId || 'placeholder topic id'
    this.creator = data.creator || {}
    this.createdAt = data.createdAt || 'creation date unknown'
  }
}
