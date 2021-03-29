import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const Duel = new Schema(
  {
    body: { type: String, required: true },
    winnerId: { type: ObjectId, ref: 'Response' },
    startTime: { type: Number },
    votable: { type: Boolean, required: true, default: false },
    timeAlloted: { type: Number, required: true, default: 300000 },
    endTime: { type: Number },
    endVotingTime: { type: Number },
    userA: new mongoose.Schema({
      creatorId: { type: String, ref: 'Account' },
      body: { type: String, required: true, default: '' },
      votes: { type: Number, required: true, default: 0 }
    }),
    userB: new mongoose.Schema({
      creatorId: { type: String, ref: 'Account' },
      body: { type: String, required: true, default: '' },
      votes: { type: Number, required: true, default: 0 }
    })
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Duel.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Duel
