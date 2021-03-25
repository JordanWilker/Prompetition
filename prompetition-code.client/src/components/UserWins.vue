<template>
  <div class="UserWins">
    <h4>User Wins</h4>
    <p>{{ user.name }}</p>
  </div>
</template>

<script>

export default {
  name: 'UserWins',
  props: {
    user: Object
  },
  setup() {
    return {}
  },
  components: {}
}
</script>
