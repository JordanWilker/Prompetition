import mongoose from 'mongoose'
const Schema = mongoose.Schema
// const ObjectId = mongoose.SchemaTypes.ObjectId

const Topic = new Schema(
  {
    body: { type: String, required: true },
    creatorId: { type: String, ref: 'Account', required: true },
    used: { type: Boolean, required: true, default: false },
    winnerResponseId: [{ type: String, ref: 'Responses', required: true }],
    challengeStartDate: { type: Number },
    active: { type: Boolean, required: true, default: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Topic.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

Topic.virtual('winner', {
  localField: 'winnerResponseId',
  ref: 'Responses',
  foreignField: '_id',
  justOne: true
})

export default Topic
