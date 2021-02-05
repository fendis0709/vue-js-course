<template>
  <div>
    <form action="#" @submit.prevent="submitData">
      <div>
        <label for="name">Name</label>
        <input type="text" v-model="user.name" autofocus required />
      </div>
      <div>
        <label for="age">Age</label>
        <input type="number" min="0" max="100" v-model="user.age" />
      </div>
      <div class="submit-button">
        <button>Add User</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: null,
        age: null,
      },
    };
  },
  emits: ["add-user"],
  methods: {
    submitData() {
      this.$emit("add-user", this.user);
      this.user.name = null;
      this.user.age = 0;
    },
  },
};
</script>