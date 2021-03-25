<template>
  <div class="UserPractices">
    <h4>User Practices</h4>
    <p>{{ user.name }}</p>
    <!-- TODO: Show a list of all the user's practice responses -->
  </div>
</template>

<script>
export default {
  name: 'UserPractices',
  props: {
    user: Object
  },
  setup() {
    return {}
  },
  components: {}
}
</script>
