<template>
  <div class="UserSubmissions">
    <h4>User Submissions</h4>
    <p>{{ user.name }}</p>
    <!-- TODO: Display a list of all of the user's submissions -->
  </div>
</template>

<script>
export default {
  name: 'UserSubmissions',
  props: {
    user: Object
  },
  setup() {
    return {}
  },
  components: {}
}
</script>
