import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const Vote = new Schema(
  {
    creatorId: { type: String, ref: 'Account', required: true },
    responseId: { type: ObjectId, ref: 'Response', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Vote.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
Vote.index({ creatorId: 1, responseId: 1 }, { unique: true })

export default Vote
