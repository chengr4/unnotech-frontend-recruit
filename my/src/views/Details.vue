<template>
  <div>
    <Cards :cards="cards" />

    <form @submit="onSubmit" class="add-form">
      <div class="form-control">
        <label>價格</label>
        <a @click="price++" class="btn">+</a>
        <input type="text" v-model="price" name="price" />
        <a @click="price--" class="btn">-</a>
      </div>
      <div class="form-control">
        <label>數量</label>
        <a @click="count++" class="btn">+</a>
        <input type="text" v-model="count" name="count" />
        <a @click="count--" class="btn">-</a>
      </div>
      <button type="submit" class="btn btn-block">確認修改</button>
    </form>
  </div>
</template>

<script>
import Cards from "../components/Cards";

export default {
  name: "Details",
  components: {
    Cards,
  },
  data() {
    return {
      cards: [],
      detailID: this.$route.params.id,
      price: 0,
      count: 0,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (this.price<0 || this.count<0) {
        alert('價格和數目必須大於零')
        this.price = 0
        this.count = 0
        return
      }

      const newData = {
        id: this.detailID,
        price: this.price,
        count: this.count,
      };
      this.changeDetails(newData);
    },
    async fetchBooks() {
      const res = await fetch("https://fe-interview-api.unnotech.com/books");
      const data = await res.json();

      return data;
    },
    async fetchBookDetails(id) {
      const res = await fetch(
        `https://fe-interview-api.unnotech.com/profile/${id}`
      );
      const data = await res.json();

      return data;
    },
    async changeDetails(updateData) {
      const res = await fetch(
        `https://fe-interview-api.unnotech.com/profile/${this.detailID}`,
        {
          method: "PUT",
          headers: new Headers({
            "Content-Type": "application/json",
          }),
          body: JSON.stringify(updateData),
        }
      ).catch((error) => console.error("Error:", error));
      const data = await res.json();
      this.price = data.price;
      this.count = data.count;

      return data;
    },
  },
  async mounted() {
    console.log('123')
    this.cards = await this.fetchBooks();
    let temp = await this.fetchBookDetails(this.detailID)
    this.price = temp.price
    this.count = temp.count
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>