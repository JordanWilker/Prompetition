<template>
  <div class="col-md-6 box text-center text-light">
    <div class="row">
      <div class="row d-inline-flex align-items-center justify-content-center w-100">
        <div class="col-sm-8">
          <div v-if="!state.editName" class="d-flex justify-content-end align-content-center">
            <h1>
              <span v-if="state.activeUser == account">
                Welcome
              </span>
              {{ state.activeUser.name }}
            </h1>
            <i class="fa fa-pencil" aria-hidden="true" v-if="state.activeUser.id == account.id" @click="state.editName = !state.editName"></i>
          </div>
          <form v-else @submit.prevent="submitNewNickname">
            <input type="text" name="username" placeholder="New Nickname... " v-model="state.newName">
            <div>
              <button class="btn btn-primary" type="submit">
                Submit
              </button>
              <button class="btn btn-primary" type="button" @click="state.editName = !state.editName">
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div class="col-sm-2">
          <img class="rounded" :src="state.user.picture" alt="" />
        </div>
      </div>
    </div>

    <div class="row d-inline-flex justify-content-between w-50 my-4">
      <!-- TODO: Get and display this user's wins, likes, and practice likes -->
      <div>
        <span>0</span>
        <i class="fa fa-trophy fa-2x" title="Daily Wins" aria-hidden="true"></i>
      </div>
      <div>
        <span>0</span>
        <i class="fa fa-heart fa-2x" title="Competitive Likes" aria-hidden="true"></i>
      </div>
      <div>
        <span>0</span>
        <i class="fa fa-heart-o fa-2x" title="Practice Likes" aria-hidden="true"></i>
      </div>
    </div>

    <div class="row">
      <div class="col-12" v-if="state.pageState == 'wins'">
        <UserWins :user="state.activeUser" />
      </div>
      <div class="col-12" v-if="state.pageState == 'submissions'">
        <UserSubmissions :user="state.activeUser" />
      </div>
      <div class="col-12" v-if="state.pageState == 'practices'">
        <UserPractices :user="state.activeUser" />
      </div>
    </div>

    <nav class="position-fixed w-100 p-0 bg-custom text-cblue">
      <ul class="navbar-nav d-flex flex-row p-0 w-100 justify-content-around">
        <li class="nav-item btn">
          <a class="nav-link hoverable p-3 px-5" @click="changeState('wins')">
            Wins
          </a>
        </li>
        <li class="nav-item btn">
          <a class="nav-link hoverable p-3 px-5" @click="changeState('submissions')">
            Submissions
          </a>
        </li>
        <li class="nav-item btn">
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
      user: computed(() => AppState.user),
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
        state.editName = false
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
.box {
  border: 2px solid gray;
  justify-content: start;
  margin: 2vh;
  margin-top: 4vh;
  padding: 3vh;
  height: min-content;
}
img {
  max-width: 100px;
}
.nav-link {
  text-transform: capitalize;
}
input {
  height: 42px;
  border: 2px solid gray;
  border-radius: 8px;
}
nav {
  bottom: 0;
  left: 0;
}
.fa-trophy {
  color: gold;
}
.fa-heart {
  color: rgb(228, 0, 49);
}
.fa-heart-o {
  color: pink;
}
.fa {
  margin-left: 1vh;
}
.fa:hover {
  cursor: help;
}
li.nav-item {
  width: 33%
}
.bg-custom {
  background-color: #01000a;
}
.text-cblue {
  color: cornflowerblue;
}
</style>
