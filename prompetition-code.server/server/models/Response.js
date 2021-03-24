import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const Response = new Schema(
  {
    body: { type: String, required: true },
    creatorId: { type: String, ref: 'Account' },
    topicId: { type: ObjectId, ref: 'Topic', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Response.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Response
