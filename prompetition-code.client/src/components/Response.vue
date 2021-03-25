<template>
  <div class="row response-card">
    <h6 class="col-12 response-date">
      {{ response.creator.name.substring(0, response.creator.name.indexOf('@')) }}
    </h6>
    <div class="col-12 d-inline-flex justify-content-between align-items-center">
      <h5>
        {{ response.body }}
      </h5>
      <i class="fa fa-heart fa-2x text-dark" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
import { Response } from '../models/Response'
export default {
  name: 'Response',
  props: {
    response: { type: Object, default: () => new Response() }
  }
}
</script>

<style scoped>
.response-card {
  margin: 2vh;
  padding: 3vh;
  border: 2px solid gray;
  border-radius: 15px;
  font-family: 'Lato', sans-serif;
}
.response-date {
  color: gray;
}
.fa-heart:hover {
  color: var(--danger) !important;
  transition: 0.2s ease-in-out;
}
</style>
