<template>
  <div class="row">
    <router-link :to="{ name: 'DuelsInfo', params: { id: duel.id }}">
      <div class="col-12 duel-card" v-if="duel.userA && duel.userB">
        <div class="row d-flex">
          <h6 class="duel-date">
            {{ duel.body }}
          </h6>
        </div>
        <div class="row">
          <div class="col">
            <p class="mb-0">
              {{ duel.userA.body }}
            </p>
            <br />
            <p>
              {{ duel.userB.body }}
            </p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { Duel } from '../models/Duel'
export default {
  name: 'Duel',
  props: {
    duel: { type: Object, default: () => new Duel() }
  }
}
</script>

<style scoped>
.duel-card {
  margin: 2vh;
  margin-left: 0vh;
  padding: 3vh;
  border: 2px solid gray;
  border-radius: 0px;
  font-family: 'Lato', sans-serif;
}
.duel-card:hover {
  cursor: pointer;
  background-color: #ffffff2c;
  transform: scale(0.99);
  transition: 0.2s ease-in-out;
}
.duel-date {
  color: #27a9af;
}
</style>
