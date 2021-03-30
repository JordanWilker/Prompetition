<template>
  <nav class="navbar navbar-expand-lg">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img
          alt="logo"
          src="https://raw.githubusercontent.com/JordanWilker/Prompetition/master/prompetition-code.client/src/assets/img/logo.PNG"
          height="45"
        />
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon text-cblue">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'Topics' }" class="nav-link">
            Prompts
          </router-link>
        </li>
      </ul>
      <span class="navbar-text">
        <button
          class="btn btn-outline-primary text-uppercase"
          @click="login"
          v-if="!user.isAuthenticated"
        >
          Login
        </button>

        <div class="dropdown" v-else>
          <div
            class="dropdown-toggle"
            @click="state.dropOpen = !state.dropOpen"
          >
            <img
              :src="user.picture"
              alt="user photo"
              height="40"
              class="rounded"
            />
            <span class="mx-3 text-cblue">{{ user.name }}</span>
          </div>
          <div
            class="dropdown-menu p-0 list-group w-100 bg-none"
            :class="{ show: state.dropOpen }"
            @click="state.dropOpen = false"
          >
            <router-link :to="{ name: 'Account' }">
              <div class="list-group-item list-group-item-action hoverable bg-none text-light">
                Account
              </div>
            </router-link>
            <div
              class="list-group-item list-group-item-action hoverable bg-none text-light"
              @click="logout"
            >
              logout
            </div>
          </div>
        </div>
      </span>
    </div>
  </nav>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  name: 'Navbar',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        await AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform-origin: 100% 0;
  transform: scaleY(0);
  transition: transform 0.10s linear;
}
.dropdown-menu.show {
  transform: scaleY(1);
}
.fa-bars {
  font-size: 22pt;
}
.list-group-item:hover {
  background-color: cornflowerblue;
  color: black !important;
}
.text-cblue {
  color: cornflowerblue !important;
}
.text-cblue:hover {
  color: lightblue !important;
}
.dropdown-toggle {
  user-select: none;
  cursor: pointer;
}
.nav-link{
  text-transform: uppercase;
  color: var(--light);
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}
</style>
