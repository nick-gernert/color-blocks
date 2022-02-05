<template>
  <div class="game-board">
    <h1 style="margin-top: 0">Color Blocks</h1>
    <div class="game-row" v-for="(row, index) in gameBoard.grid" :key="index">
      <GameTile
        class="game-item"
        v-for="(item, indexJ) in row"
        @handle-click="checkBoard(index, indexJ)"
        :value="item"
        :key="indexJ"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GameTile from '@/components/GameTile.vue';
import GameBoard from '@/models/GameBoard';

@Component({
  components: {
    GameTile,
  },
})
export default class extends Vue {
  gameBoard!: GameBoard;

  created(): void {
    this.gameBoard = new GameBoard(10, 10);
  }

  checkBoard(row: number, col: number): void {
    this.gameBoard.grid = JSON.parse(JSON.stringify(this.gameBoard.checkGameBoard(row, col)));
  }
}
</script>

<style scoped>
.game-row {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.game-item {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
