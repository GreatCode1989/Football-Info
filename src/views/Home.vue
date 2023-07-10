<template>
  <div>
    <div>
      <h2 class="is-life">FOOTBALL IS LIFE</h2>
    </div>
    <input
      class="com-mand"
      v-model="teamname"
      type="text"
      placeholder="Search Players"
      @change="SearchedCommands"
    />
  </div>

  <div>
    <p class="detailed-info">
      Сlick on the picture to find out more detailed information
    </p>
  </div>
  <div class="player-cards">
    <div class="player-card" v-for="player in players" :key="player.idPlayer">
      <div>
        <p>{{ player.strPlayer }}</p>
      </div>

      <img
        v-if="player.strThumb"
        class="player-img"
        :src="player.strThumb"
        :alt="player.strNationality"
      />
      <img v-else class="player-img" src="../assets/img/no-photo.jpg" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import store from "../store";

const teamname = ref("");
const players = computed(() => {
  return store.state.searchedTeams;
});

function SearchedCommands() {
  store.dispatch("searchTeams", teamname.value);
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'
.com-mand
  width: 70%
  display: flex
  justify-content: center
  margin: 0 auto
  margin-top: 35px
  height: 37px
  border-color: $blue
  font-size: 21px
  margin-bottom: 15px

  &:focus
    border-color: $blue
    outline: none

.is-life
  display: flex
  justify-content: center
  margin: 0 auto
  padding-top: 30px
  font-size: 30px
  color: $blue
  letter-spacing: 1rem

.detailed-info
  display: flex
  justify-content: center
  margin: 0 auto
  padding-top: 30px
  font-size: 30px
  color: $blue
  letter-spacing: 1rem
  padding-bottom: 30px
.player-cards
  display: flex
  flex-wrap: wrap
  justify-content: space-evenly

.player-img
  display: flex
  flex-direction: row
  max-width: 300px
  margin: 5px

@media (max-width: 1024px)
  .player-card

@media (max-width: 768px)
  .player-card

@media (max-width: 480px)
  .player-card
</style>