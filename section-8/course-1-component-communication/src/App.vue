<template>
  <section>
    <header>
      <h1>My Watch List</h1>
    </header>
    <ul>
      <li v-for="watchList in watchLists" :key="watchList.id">
        <watch-list
          :id="watchList.id"
          :name="watchList.name"
          :release-day="watchList.releaseDay"
          :genres="watchList.genres"
          :is-favorite="watchList.isFavorite"
          @toggle-favorite="toggleFavorite"
        ></watch-list>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      watchLists: [
        {
          id: 1,
          name: "Shingeki no Kyojin - Final Season",
          releaseDay: "Sunday",
          genres: ["Action", "Adventure", "Shounen", "Supranatural"],
          isFavorite: true,
        },
        {
          id: 2,
          name: "Yakusoku no Neverland",
          genres: ["Adventure", "Monster"],
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(id) {
      let watchList = this.watchLists.find((watchList) => watchList.id === id);
      watchList.isFavorite = !watchList.isFavorite;
    },
  },
};
</script>