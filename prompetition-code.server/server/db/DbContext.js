import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import TopicsSchema from '../models/Topic'
import ResponsesSchema from '../models/Response'
import VotesSchema from '../models/Vote'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Topics = mongoose.model('Topics', TopicsSchema)
  Responses = mongoose.model('Responses', ResponsesSchema)
  Votes = mongoose.model('Votes', VotesSchema)
}

export const dbContext = new DbContext()
