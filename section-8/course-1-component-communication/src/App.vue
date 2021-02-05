<template>
  <section>
    <header>
      <h1>My Watch List</h1>
    </header>
    <div>
      <add-watch-list @add-watch-list="addWatchList"></add-watch-list>
    </div>
    <hr />
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
    addWatchList(anime) {
      const counter = this.watchLists.length;
      const newAnime = {
        id: counter + 1,
        name: anime.name,
        releaseDay: anime.releaseDay,
        genres: [anime.genre],
        isFavorite: false,
      };
      this.watchLists.push(newAnime);
    },
  },
};
</script>