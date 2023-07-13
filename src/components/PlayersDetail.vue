

<script setup>
const players = defineProps({
  players: {
    type: Array,
    requiared: true,
  },
});
</script>

<template>
  <div v-for="player of players" :key="player.idPlayer" class="img-v">
    <div class="player-container">
      <router-link :to="{ name: 'stones', params: { id: player.idPlayer } }">
        <img
          class="img-player"
          v-if="player.strThumb"
          :src="player.strThumb"
          alt="" />
        <img v-else src="../assets/img/no-photo.jpg" alt=""
      /></router-link>
    </div>

    <div class="player-info">
      <div class="info">
        <h2>Country: {{ player.strNationality }}</h2>
        <p>Football Team: {{ player.strTeam }}</p>
        <p>Date Born: {{ player.dateBorn }}</p>
        <p>Birth Location: {{ player.strBirthLocation }}</p>
        <h3 class="h-click">Click on Picture to find out Milestones</h3>
      </div>
    </div>
    <div class="description">
      <p>{{ player.strDescriptionEN }}</p>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.player-container
  position: relative

.img-v
  display: flex
  margin: 40px

.img-player
  max-width: 350px
  border-radius: 15px
  margin-right: 20px
.player-info
  margin: 10px

.description
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
  width: 100%
  top: 400px
  padding-left: 50px
  padding-right: 50px
  font-size: 30px
  text-align: justify

.info
  font-weight: bold
  font-size: 20px
  line-height: 1

.h-click
  color: $blue
</style>