<template>
  <div>
    <div v-for="item of info" :key="item.idPlayer" class="item-all">
      <h3><span>Honour: </span> {{ item.strHonour }}</h3>
      <div>
        <h3><span>> Sport: </span> {{ item.strSport }}</h3>
      </div>
      <div>
        <h3>
          <span>* Team: </span>
          {{ item.strTeam }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axiosClient from "../AxiosClient";
import { useRoute } from "vue-router";

const route = useRoute();
const info = ref([]);

onMounted(() => {
  axiosClient
    .get(`lookuphonours.php?id=${route.params.id}`)
    .then((response) => {
      const data = response.data;
      info.value = data.honours;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.item-all
    display: flex
    flex-wrap: wrap
    justify-content: center
    background-color: $greenrez
    color: #fff
    border-radius: 5px
    padding: 1px
    margin: 10px
    padding-left: 25px
    font-size: 20px
    letter-spacing: 2px

h3
    padding: 20px
</style>