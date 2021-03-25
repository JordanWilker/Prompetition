<template>
  <router-link :to="{ name: 'Responses', params: { topicId: topic.id }}">
    <div class="row topic-card">
      <h6 class="topic-date">
        {{ topic.createdAt.substring(0, 10) }}
      </h6>
      <h4 class="mb-0">
        {{ topic.body }}
      </h4>
    </div>
  </router-link>
<!-- Not getting any errors... But also no responses... -->
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
  margin: 2vh;
  padding: 3vh;
  border: 2px solid gray;
  border-radius: 15px;
  font-family: 'Lato', sans-serif;
}
.topic-card:hover {
  cursor: pointer;
  background-color: #8080802c;
  transform: scale(0.9);
  transition: 0.2s ease-in-out;
}
.topic-date {
  color: gray;
}
</style>
