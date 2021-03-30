import mongoose from 'mongoose'
// import { dbContext } from '../db/DbContext.js'

const Schema = mongoose.Schema
// const ObjectId = mongoose.SchemaTypes.ObjectId

const Response = new Schema(
  {
    body: { type: String, required: true },
    creatorId: { type: String, ref: 'Account' },
    topicId: { type: String, ref: 'Topic', required: true },
    votes: { type: Number, required: true, default: 0 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
Response.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

Response.index({ creatorId: 1, topicId: 1 }, { unique: true })
export default Response
