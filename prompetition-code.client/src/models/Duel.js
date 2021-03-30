export class Duel {
  constructor(data = {}) {
    this.id = data.id || data._id || 'placeholder id'
    this.body = data.body || 'test body'
    this.votable = data.votable
    this.timeAlloted = data.timeAlloted
    this.userA = data.userA
    this.userB = data.userB
  }

  //   parseDate(givenTime) {
  //     const date = new Date(givenTime)
  //     return date.toString().substring(0, 15)
  //   }
}
