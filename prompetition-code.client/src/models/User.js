export class User {
  constructor(data = {}) {
    this.id = data.id || data._id || ''
    this.name = data.name || ''
    this.email = data.email || ''
    this.picture = data.picture || 'https://placehold.it/200x200'
  }
}
