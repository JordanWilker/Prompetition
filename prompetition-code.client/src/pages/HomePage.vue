<template>
  <div class="col-12">
    <div class="row d-flex justify-content-center">
      <img src="https://raw.githubusercontent.com/JordanWilker/Prompetition/master/prompetition-code.client/src/assets/img/skybg.PNG" alt="Sky Background Logo" class="img-fluid mt-3">
    </div>
    <div class="row d-flex justify-content-center mt-5">
      <button class="btn btn-info px-5">
        Daily Prompt
      </button>
      <button class="btn btn-dark">
        <i class="fa fa-info-circle" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
img {
  border-radius: 10px;
  max-height: 207px;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
}
</style>
