<template>
  <div class="col-sm-8">
    <div class="row d-flex justify-content-center text-light my-3">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" title="Inspirational Images">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://raw.githubusercontent.com/JordanWilker/Prompetition/master/prompetition-code.client/src/assets/img/slide1.jpg" alt="First slide">
            <div class="carousel-caption d-none d-md-block text-shadow">
              <h6>from <span class="bold">Prompetition</span></h6>
            </div>
          </div>
          <CarouselImage v-for="image in state.images" :key="image.id" :img="image.urls.regular" :unsplashuser="image.user.name" />
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="row d-flex justify-content-center mb-3">
      <div class="col-sm m-2 panel-button hvr-underline-from-left bg-primary">
        <div class="row d-flex justify-content-end bg-lighter">
          <button class="info-button text-light" @click="showInfo(0)">
            <i class="fa fa-info-circle" aria-hidden="true"></i>
          </button>
        </div>
        <router-link :to="{ name: 'Daily-Challenge'}">
          <div class="row h-75 d-flex justify-content-center align-items-center">
            <i class="fa fa-calendar-plus-o text-light fa-5x text-shadow" aria-hidden="true"></i>
          </div>
        </router-link>
      </div>
      <div class="col-sm m-2 panel-button hvr-underline-from-left bg-secondary">
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
      <div class="col-sm m-2 panel-button hvr-underline-from-left bg-warning">
        <div class="row d-flex justify-content-end bg-lighter">
          <button class="info-button text-light" @click="sendData">
            <i class="fa fa-info-circle" aria-hidden="true"></i>
          </button>
        </div>
        <router-link :to="{ name: 'DuelsList' }">
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
import { duelService } from '../services/DuelsService'
import { alertService } from '../services/AlertService'
import { unsplashService } from '../services/UnsplashService'
import CarouselImage from '../components/CarouselImage.vue'
export default {
  components: { CarouselImage },
  name: 'Home',
  setup() {
    onMounted(() => {
      topicService.getTodaysTopic()
      unsplashService.getImages()
    })
    const state = reactive({
      topics: computed(() => AppState.topics),
      todaysTopic: computed(() => AppState.todaysTopic),
      images: computed(() => AppState.images)
    })
    return {
      state,
      sendData() {
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
.carousel-inner {
  max-width: 75vh;
  max-height: 37vh;
  height: auto;
  width: auto;
  display: flex;
}
.carousel-item {
  max-width: 75vh;
  max-height: 37vh;
}
.panel-button {
  height: 35vh;
  width: 35vh;
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
