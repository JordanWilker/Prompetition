<template>
  <div class="col-12">
    <div class="row d-flex justify-content-center">
      <img src="https://raw.githubusercontent.com/JordanWilker/Prompetition/master/prompetition-code.client/src/assets/img/skybg.PNG" alt="Sky Background Logo" class="img-fluid mt-3">
    </div>
    <div class="row d-flex justify-content-center mt-5">
      <div class="col-sm panel-button hvr-underline-from-left bg-primary">
        <div class="row d-flex justify-content-end bg-lighter">
          <button class="info-button text-light" @click="showInfo(0)">
            <i class="fa fa-info-circle" aria-hidden="true"></i>
          </button>
        </div>
        <router-link :to="{ name: 'Write', params: { topicId: state.todaysTopic.id }}">
          <div class="row h-75 d-flex justify-content-center align-items-center">
            <i class="fa fa-calendar-plus-o text-light fa-5x text-shadow" aria-hidden="true"></i>
          </div>
        </router-link>
      </div>
      <!-- ADD BELOW -->
      <div class="col-sm m-4 panel-button hvr-underline-from-left bg-secondary">
        <div class="row d-flex justify-content-end bg-lighter">
          <button class="info-button text-light" @click="showInfo(1)">
            <i class="fa fa-info-circle" aria-hidden="true"></i>
          </button>
        </div>
        <router-link :to="{ name: 'Topics' }">
          <div class="row h-75 d-flex justify-content-center align-items-center">
            <i class="fa fa-calendar text-light fa-5x text-shadow" aria-hidden="true"></i>
          </div>
        </router-link>
      </div>
      <div class="col-sm panel-button hvr-underline-from-left bg-warning">
        <div class="row d-flex justify-content-end bg-lighter">
          <button class="info-button text-light" @click="sendData">
            <i class="fa fa-info-circle" aria-hidden="true"></i>
          </button>
        </div>
        <router-link :to="{ name: 'Topics' }">
          <div class="row h-75 d-flex justify-content-center align-items-center">
            <i class="fa fa-bolt text-light fa-5x text-shadow" aria-hidden="true"></i>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { topicService } from '../services/TopicService'
import { socketService } from '../services/SocketsService'
import { duelService } from '../services/DuelsService'
import { alertService } from '../services/AlertService'
export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      topicService.getTodaysTopic()
      socketService.emit('join:room', 'general')
    })
    const state = reactive({
      topics: computed(() => AppState.topics),
      todaysTopic: computed(() => AppState.todaysTopic)
    })
    return {
      state,
      sendData() {
        console.log('This is the Home Page')
        duelService.startDuel()
      },
      showInfo(num) {
        alertService.showInfo(num)
      }
    }
  }
}
</script>

<style scoped lang="scss">
img {
  border-radius: 10px;
  max-height: 207px;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
}

.panel-button {
  height: 300px;
  max-width: 300px;
  border-radius: 2px;
}

.bg-lighter {
  background-color: rgba(255, 255, 255, 0.5);
}

.info-button {
  background-color: #313130;
  border: none;
  padding: 1vh;
  max-height: 30px;
  max-width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-shadow {
  filter: drop-shadow(2px 2px 2px black);
}

.hvr-underline-from-left {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-left:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  bottom: 0;
  background: #313130;
  height: 10px;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-left:hover:before, .hvr-underline-from-left:focus:before, .hvr-underline-from-left:active:before {
  right: 0;
}
</style>
