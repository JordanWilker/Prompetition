<template>
  <div class="row d-flex mb-3">
    <router-link :to="{ name: 'Responses', params: { topicId: topic.id }}">
      <div class="col-12 topic-card">
        <div class="row d-flex m-2 mt-4">
          <h6 class="topic-date">
            {{ new Date(topic.challengeStartDate).toLocaleDateString() }}
          </h6>
        </div>
        <div class="row d-flex m-2 mb-4">
          <h4 class="mb-0">
            {{ topic.body }}
          </h4>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { Topic } from '../models/Topic'
export default {
  name: 'Topic',
  props: {
    topic: { type: Object, default: () => new Topic() }
  }
}
</script>

<style scoped>
.topic-card {
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
