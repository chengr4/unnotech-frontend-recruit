<template>
  <div class="card">
    <router-link :to="{ name: 'Details', params: { id: card.id } }">
      <img :src="card.image" />
      <p>{{ card.name }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object,
  },
};
</script>

<style scoped>
.card {
  margin: 30px auto;
  min-height: 300px;
  border: 1px solid rgb(1, 4, 6);
  padding: 30px;
  border-radius: 5px;
}

.router-link-active,
.router-link-exact-active {
  border-radius: 3px;
  background-color: red;
}
</style>