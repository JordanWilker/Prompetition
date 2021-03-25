<template>
  <div class="about text-center container">
    <div class="row">
      <div class="col">
        <h1>
          <!-- TODO: Get and display this user's wins, likes, and practice likes -->
          <span v-if="state.activeUser == account">Welcome</span>
          {{ state.activeUser.name }}
        </h1>
        <img class="rounded" :src="state.activeUser.picture" alt="" />
        <p>{{ state.activeUser.email }}</p>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <UserWins :user="state.activeUser" v-if="state.pageState == 'wins'" />
      </div>
      <div class="col-12">
        <UserSubmissions :user="state.activeUser" v-if="state.pageState == 'submissions'" />
      </div>
      <div class="col-12">
        <UserPractices :user="state.activeUser" v-if="state.pageState == 'practices'" />
      </div>
    </div>

    <nav class="position-fixed w-100 p-0 bg-dark">
      <ul class="navbar-nav d-flex flex-row p-0 w-100 justify-content-around">
        <li class="nav-item btn btn-dark">
          <a class="nav-link hoverable p-3 px-5" @click="changeState('wins')">
            Wins
          </a>
        </li>
        <li class="nav-item btn btn-dark">
          <a class="nav-link hoverable p-3 px-5" @click="changeState('submissions')">
            Submissions
          </a>
        </li>
        <li class="nav-item btn btn-dark">
          <a class="nav-link hoverable p-3 px-5" @click="changeState('practices')">
            Practice
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { accountService } from '../services/AccountService.js'
import { useRoute } from 'vue-router'
import UserWins from '../components/UserWins'
import UserSubmissions from '../components/UserSubmissions'
import UserPractices from '../components/UserPractices'

export default {
  name: 'Account',
  setup() {
    const route = useRoute()
    const state = reactive({
      pageState: 'wins',
      activeUser: computed(() => AppState.activeUserView)
    })
    onMounted(() => {
      if (route.params.id) {
        accountService.getUser(route.params.id)
      } else {
        state.activeUser = computed(() => AppState.account)
      }
    })
    return {
      state,
      account: computed(() => AppState.account),
      changeState(newState = 'wins') {
        state.pageState = newState
      }
    }
  },
  components: {
    UserWins,
    UserSubmissions,
    UserPractices
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
.nav-link {
  text-transform: capitalize;
}
nav {
  bottom: 0;
  left: 0;
}

li {
  width: 33%
}
</style>
