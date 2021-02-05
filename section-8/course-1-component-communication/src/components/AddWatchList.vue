<template>
  <form action="#" @submit.prevent="submitData">
    <div>
      <label for="name">Name</label>
      <input type="text" v-model="anime.name" autofocus />
    </div>
    <div>
      <label for="release-day">Release Day</label>
      <input type="text" v-model="anime.releaseDay" />
    </div>
    <div>
      <label for="genre">Genre</label>
      <input type="text" v-model="anime.genre" />
    </div>
    <div class="submit-button">
      <button>Add to Watch List</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      anime: {
        name: null,
        releaseDay: null,
        genre: null,
      },
    };
  },
  emits: ["add-watch-list"],
  methods: {
    submitData() {
      this.$emit("add-watch-list", this.anime);
      this.anime.name = null;
      this.anime.releaseDay = null;
      this.anime.genre = null;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
#app input {
  font: inherit;
  padding: 0.15rem;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app form div {
  margin: 1rem 0;
}

#app form div.submit-button {
  text-align: center;
}
</style>