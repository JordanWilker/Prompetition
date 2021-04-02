import mongoose from 'mongoose'
const Schema = mongoose.Schema
// const ObjectId = mongoose.SchemaTypes.ObjectId

const Duel = new Schema(
  {
    body: { type: String, required: true },
    winnerId: { type: String, ref: 'Account', required: true, default: 'b' },
    startTime: { type: Number, required: true, default: 0 },
    active: { type: Boolean, required: true, default: false },
    votable: { type: Boolean, required: true, default: true },
    timeAlloted: { type: Number, required: true, default: 300000 },
    endTime: { type: Number },
    endVotingTime: { type: Number },
    userA: new mongoose.Schema({
      creatorId: { type: String, ref: 'Account' },
      body: { type: String, required: false, default: '' },
      votes: { type: Number, required: true, default: 0 }
    }),
    userB: new mongoose.Schema({
      creatorId: { type: String, ref: 'Account' },
      body: { type: String, required: false, default: '' },
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
