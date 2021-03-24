<template>
  <router-link>
    <div class="row response-card">
      <h6 class="response-date">
        {{ response.creator.id }}
      </h6>
      <h4 class="mb-0">
        {{ response.body }}
      </h4>
    </div>
  </router-link>
</template>

<script>
import { Response } from '../models/Response'
export default {
  name: 'Response',
  props: {
    response: { type: String, default: () => new Response() }
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
.response-card:hover {
  cursor: pointer;
  background-color: #8080802c;
  transform: scale(0.9);
  transition: 0.2s ease-in-out;
}
.response-date {
  color: gray;
}
</style>
