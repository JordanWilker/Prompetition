import { AppState } from '../AppState'
import { SocketHandler } from '../utils/SocketHandler'

class SocketService extends SocketHandler {
  // register listeners for the room messages/emits that come from the server
  constructor() {
    super()
    this
      .on('create:duel', this.createDuel)
      .on('remove:duel', this.removeDuel)
      .on('update:duel', this.updateDuel)
      .on('get:duel', this.getDuel)
  }

  authenticate(bearerToken) {
    this.socket.emit('authenticate', bearerToken)
  }

  connected(payload) {
    console.log(payload.message)
  }

  createDuel(payload) {
    console.log(payload)
    AppState.duels.push(payload)
  }

  getDuel(payload) {
    console.log(payload)
    AppState.duels.push(payload)
  }

  removeDuel(id) {
    const index = AppState.duels.findIndex(p => p.id === id)
    AppState.duels.splice(index, 1)
  }

  updateDuel(payload) {
    const index = AppState.duels.findIndex(p => p.id === payload.id)
    AppState.duels.splice(index, 1, payload)
  }
}

export const socketService = new SocketService()
