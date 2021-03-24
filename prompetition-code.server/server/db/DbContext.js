import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import TopicsSchema from '../models/Topic'
import ResponsesSchema from '../models/Response'
import NewTopicsSchema from '../models/NewTopic'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Topics = mongoose.model('Topics', TopicsSchema)
  NewTopics = mongoose.model('NewTopics', NewTopicsSchema)
  Responses = mongoose.model('Responses', ResponsesSchema)
}

export const dbContext = new DbContext()
