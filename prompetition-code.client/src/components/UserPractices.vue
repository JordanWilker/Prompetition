<template>
  <div class="UserPractices">
    <h4>User Practices</h4>
    <p>{{ user.name }}</p>
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
