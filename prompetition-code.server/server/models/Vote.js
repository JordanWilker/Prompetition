import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const Vote = new Schema(
  {
    creatorId: { type: String, ref: 'Account', required: true },
    responeId: { type: ObjectId, ref: 'Response' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Vote.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Vote
