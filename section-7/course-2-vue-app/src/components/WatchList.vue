<template>
  <div>
    <h2>{{ name }}</h2>
    <button @click="toggleDetail()">{{ toggleDetailText }}</button>
    <ul v-show="showDetail">
      <li>Release Day: {{ releaseDay }}</li>
      <li>Genre(s): {{ genreList }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    genres: Array,
    releaseDay: {
      type: String,
      required: false,
      default: "-",
      validator: (value) => {
        const validDays = [
          "-",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ];
        return validDays.includes(value);
      },
    },
  },
  data() {
    return {
      showDetail: false,
    };
  },
  methods: {
    toggleDetail() {
      this.showDetail = !this.showDetail;
    },
  },
  computed: {
    toggleDetailText() {
      return this.showDetail ? "Show Details" : "Hide Details";
    },
    genreList() {
      return this.genres.join(", ");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>