<template>
  <div class="bg-color">
    <div class="header">
      <h2>BEST EVENT OF FOOTBALL LIFE</h2>
    </div>
    <div class="header">Enter Name Football Team</div>
    <div>
      <input
        class="search-match"
        v-model="event"
        type="text"
        placeholder="Search Match"
        @change="searchEvent"
      />
    </div>
    <div class="items-container">
      <div v-for="event of events" :key="event.idEvent" class="item-container">
        <div class="item-all">
          <div>AwayTeam: {{ event.strAwayTeam }}</div>
          <div>Country: {{ event.strCountry }}</div>
          <div>Event: {{ event.strEvent }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import store from "../store";

const event = ref("");
const events = computed(() => {
  return store.state.searchedEvents;
});

function searchEvent() {
  if (event.value) {
    store.dispatch("searchEvents", event.value);
    localStorage.setItem("Event", event.value);
  } else {
    store.commit("searchEventName", []);
  }
}

onMounted(() => {
  event.value = localStorage.getItem("Event");
  if (event.value) {
    searchEvent();
  }
});
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.bg-color
  background-color: $greenrez
  min-height: 100vh
  min-width: 100vw
.header
  display: flex
  justify-content: center
  margin: 0 auto
  padding-top: 30px
  font-size: 30px
  color: $blue
  letter-spacing: 1rem

.search-match
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

.items-container
  display: flex
  flex-wrap: wrap
  justify-content: center

  .item-container
    width: 25%
    background-color: $green
    margin-bottom: 20px
    margin: 30px

.item-all
  padding: 20px
  line-height: 2
  font-size: 21px
  letter-spacing: 1px
</style>