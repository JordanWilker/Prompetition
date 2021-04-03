<template>
  <div class="carousel-item">
    <div class="d-flex bg-dark cimg-container justify-content-center" :src="props.img" alt="First slide">
      <img class="" :src="props.img" alt="First slide">
    </div>
    <div class="carousel-caption d-none d-md-block text-shadow">
      <h6>from <span class="bold">{{ props.unsplashuser }}</span></h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: {
    img: { type: String, default: 'https://place-hold.it/800x400' },
    unsplashuser: { type: String, default: 'unknown' }
  },
  setup(props) {
    return {
      props
    }
  }
}
</script>

<style>
img {
    max-width: 75vh;
    max-height: 37vh;
}
.cimg-container {
    width: 75vh;
    height: 37vh;
}
</style>
