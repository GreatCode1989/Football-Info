<template>
  <div>
    <div>
      <h1 class="list-info">Click For More Details</h1>
    </div>
    <router-link :to="{ name: 'event' }" class="underline">
      <div
        v-for="item of list.slice(0, 100)"
        :key="item.idLeague"
        class="item-all"
      >
        <h3><span>League: </span> {{ item.strLeague }}</h3>
        <div>
          <h3><span>> Sport: </span> {{ item.strSport }}</h3>
        </div>
        <div>
          <h3>
            <span>* League Alternate: </span>
            {{ item.strLeagueAlternate }}
          </h3>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../AxiosClient";

const list = ref([]);

onMounted(() => {
  axiosClient.get("all_leagues.php").then((response) => {
    const data = response.data;
    const leagues = data.leagues;
    list.value = leagues;
  });
});
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.underline
  text-decoration: none
.item-all
  background-color: $greenrez
  color: #fff
  border-radius: 5px
  padding: 1px
  margin: 10px
  padding-left: 25px
  font-size: 20px
  letter-spacing: 2px

  span
    color: $background

.list-info
  display: flex
  justify-content: center
  margin: 0 auto
  padding-top: 30px
  font-size: 30px
  color: $blue
  letter-spacing: 1rem
  padding-bottom: 30px
</style>