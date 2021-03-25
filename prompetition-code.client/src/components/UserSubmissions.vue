<template>
  <div class="UserSubmissions">
    <h4>User Submissions</h4>
    <p>{{ user.name }}</p>
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
