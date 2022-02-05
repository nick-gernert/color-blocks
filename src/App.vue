<template>
  <div id="app">
    <GameBoard />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GameBoard from '@/components/GameBoard.vue';

@Component({
  components: {
    GameBoard,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background-color: slategray;
}
</style>
