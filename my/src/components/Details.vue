<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>價格</label>
      <button @click="onClickMinus()" class="btn">-</button>
      <input type="text" v-model="text" name="text" />
      <button @click="onClickPlus()" class="btn">+</button>
    </div>
    <div class="form-control">
      <label>數量</label>
      <button @click="onClickMinus()" class="btn">-</button>
      <input type="text" v-model="day" name="day" />
      <button @click="onClickPlus()" class="btn">+</button>
    </div>

    <input type="submit" value="確認修改" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      price: "",
      amout: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.text) {
        alert("Please add a task");
        return;
      }
      const updatedBook = {
        text: this.text,
        day: this.day,
      };
      this.$emit("add-task", newTask);
      this.text = "";
      this.day = "";
      this.reminder = false;
    },
    async changeDetails(updateData) {
      const res = await fetch(
        `https://fe-interview-api.unnotech.com/profile/${id}`,
        {
          method: "PUT",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        }
      );
      const data = await res.json();

      return data;
    },
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