<template>
  <div>
    <div class="flex container">
      <Cards :cards="cards" />
    </div>
  </div>
</template>

<script>
import Cards from "../components/Cards";

export default {
  name: "Home",
  components: {
    Cards,
  },
  data() {
    return {
      cards: [],
      id: 0
    };
  },
  methods: {
    async fetchBooks() {
      const res = await fetch("https://fe-interview-api.unnotech.com/books");
      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.cards = await this.fetchBooks();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  margin: 30px auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
</style>