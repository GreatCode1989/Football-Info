<template>
  <div class="green-rez">
    <div>
      <div>
        <h2 class="is-life">FOOTBALL IS LIFE</h2>
        <div>
          <router-link :to="{ name: 'list' }">
            <button class="custom-button">List Leagues</button></router-link
          >
        </div>
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
        <div class="name-player">
          <p>{{ player.strPlayer }}</p>
        </div>
        <router-link
          :to="{ name: 'infoplayer', params: { id: player.idPlayer } }"
          ><img
            v-if="player.strThumb"
            class="player-img"
            :src="player.strThumb"
            :alt="player.strNationality" />
          <img
            v-else
            class="player-img"
            src="../assets/img/no-photo.jpg"
            alt=""
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import store from "../store";

const teamname = ref("");
const players = computed(() => {
  return store.state.searchedTeams;
});

function SearchedCommands() {
  if (teamname.value) {
    store.dispatch("searchTeams", teamname.value);
    localStorage.setItem("PlayerValue", teamname.value);
  } else {
    store.commit("searchNameTeams", []);
  }
}

onMounted(() => {
  teamname.value = localStorage.getItem("PlayerValue");
  if (teamname.value) {
    SearchedCommands();
  }
});
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.green-rez
  background-color: $greenrez
  min-height: 100vh
  min-width: 100vw
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

.name-player
  letter-spacing: 2px
  font-size: 20px
  font-weight: bold

.custom-button
  position: fixed
  cursor: pointer
  top: 10px
  right: 10px
  z-index: 9999
  margin: 30px
  font-size: 18px
  background-color: $bluelight
  color: #fff
  padding: 5px
  border-radius: 3px
  border-color: $violet
  letter-spacing: 2px
  font-weight: bold
</style>