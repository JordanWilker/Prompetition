import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const DuelVote = new Schema(
  {
    creatorId: { type: String, ref: 'Account', required: true },
    duelId: { type: ObjectId, ref: 'Response', required: true },
    voteTarget: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

DuelVote.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
DuelVote.index({ creatorId: 1, duelId: 1 }, { unique: true })

export default DuelVote
