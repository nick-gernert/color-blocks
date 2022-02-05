<template>
  <div
    class="game-tile"
    @click="handleClick"
    :style="{ backgroundColor: value }"
  >
    {{ value }}
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Emit,
} from 'vue-property-decorator';
import { GameColor } from '@/models/GameBoard';

@Component
export default class extends Vue {
  @Prop({ required: true }) value!: GameColor;

  @Emit() handleClick(): GameColor {
    return this.value;
  }
}
</script>

<style scoped>
.game-tile {
  height: 100px;
  width: 100px;
  background-color: black;
  cursor: pointer;
}
</style>
