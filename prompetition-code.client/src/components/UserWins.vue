<template>
  <div class="UserWins container-fluid">
    <h4>User Wins</h4>
    <!-- TODO: Display a list of the user's wins -->
    <div class="row">
      <div class="col-12">
        Today's response
      </div>
      <div class="col-12">
        Previous Wins
      </div>
      <div class="col-12">
        <!-- <div class="row" v-for="response in state.responses" :key="response.id">
          <i class="fa fa-star" aria-hidden="true"></i>
          {{ response.body }}
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { reactive } from 'vue'
// import Response from '../models/Response'
export default {
  name: 'UserWins',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    user: Object
  },
  setup() {
    // const state = reactive({
    //   responses: [
    //     new Response({
    //       _id: '001',
    //       body: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    //       topicId: 't001'
    //     }),
    //     new Response({
    //       _id: '002',
    //       body: 'L2rem ipsum d2l2r sit amet. L2rem ipsum d2l2r sit amet. L2rem ipsum d2l2r sit amet. L2rem ipsum d2l2r sit amet.',
    //       topicId: 't002'
    //     })
    //   ]
    // })
    return {
      // state
    }
  }
}
</script>
