<template>
  <router-link class="topic-card col-12" :to="{ name: 'Responses', params: { topicId: topic.id }}">
    <div class="row d-flex">
      <h6 class="topic-date">
        {{ new Date(topic.challengeStartDate).toLocaleDateString() }}
      </h6>
    </div>
    <div class="row d-flex">
      <h4 class="mb-0">
        {{ topic.body }}
      </h4>
    </div>
  </router-link>
</template>

<script>
import { Topic } from '../models/Topic'
export default {
  name: 'Topic',
  props: {
    topic: { type: Object, default: () => new Topic() },
    winners: { type: Object, default: () => new Response() }
  }
}
</script>

<style scoped>
.topic-card {
  padding: 3vh;
  border: 2px solid gray;
  border-radius: 0px;
  font-family: 'Lato', sans-serif;
  transition: 0.2s ease-in-out;
}
.topic-card:hover {
  cursor: pointer;
  background-color: #ffffff2c;
  transform: scale(0.99);
}
.topic-date {
  color: #27a9af;
}
</style>
