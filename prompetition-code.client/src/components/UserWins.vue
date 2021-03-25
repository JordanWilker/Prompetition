<template>
  <div class="UserWins">
    <h4>User Wins</h4>
    <p>{{ user.name }}</p>
  <!-- TODO: Display a list of the user's wins -->
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
