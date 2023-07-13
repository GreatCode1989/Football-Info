<template>
  <div><PlayersDetail :players="players" /></div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import axiosClient from "../AxiosClient";
import PlayersDetail from "./PlayersDetail.vue";

const route = useRoute();
const players = ref({});

onMounted(() => {
  axiosClient
    .get(`lookupplayer.php?id=${route.params.id}`)
    .then((response) => {
      const data = response.data;
      players.value = data.players[0];
      console.log(players.value);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'
</style>