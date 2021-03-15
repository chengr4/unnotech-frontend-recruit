<template>
  <div>
    <div :key="card.id" v-for="card in cards">
      <Card :card="card" />
    </div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "Cards",
  props: {
    cards: Array,
  },
  components: {
    Card,
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
}
</style>