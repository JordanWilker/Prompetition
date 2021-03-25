<template>
  <div class="about text-center container">
    <div class="row">
      <div class="col">
        <div v-if="!state.editName" class="d-flex justify-content-center align-content-center">
          <h1>
            <span v-if="state.activeUser == account">Welcome</span>
            {{ state.activeUser.name }}
          </h1>
          <button v-if="state.activeUser.id == account.id" class="btn btn-primary ml-3" @click="state.editName = !state.editName">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
        </div>
        <form v-else @submit.prevent="submitNewNickname">
          <label for="username" class="mr-2">New Nickname: </label>
          <input type="text" name="username" :placeholder="account.name" v-model="state.newName">
          <button class="btn btn-primary ml-3" type="submit">
            Submit
          </button>
          <button class="btn btn-primary ml-3" type="button" @click="state.editName = !state.editName">
            Cancel
          </button>
        </form>

        <img class="rounded" :src="state.activeUser.picture" alt="" />
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        <ul class="text-left list-unstyled">
          <!-- TODO: Get and display this user's wins, likes, and practice likes -->
          <li class="w-100">
            <span>0</span>
            Daily Wins
          </li>
          <li class="w-100">
            <span>0</span>
            Competitive Likes
          </li>
          <li class="w-100">
            <span>0</span>
            Practice Likes
          </li>
        </ul>
      </div>
      <div class="col-4">
        <UserWins :user="state.activeUser" v-if="state.pageState == 'wins'" />
      </div>
      <div class="col-4">
        <UserSubmissions :user="state.activeUser" v-if="state.pageState == 'submissions'" />
      </div>
      <div class="col-4">
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
      activeUser: computed(() => AppState.activeUserView),
      editName: false,
      newName: AppState.account.name
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
      },
      submitNewNickname() {
        accountService.editUserName(state.newName)
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
