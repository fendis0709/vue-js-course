<template>
  <section>
    <header>
      <h1>My Watch List</h1>
    </header>
    <ul>
      <li v-for="watchList in watchLists" :key="watchList.id">
        <watch-list :anime="watchList"></watch-list>
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
        },
        {
          id: 2,
          name: "Yakusoku no Neverland",
          releaseDay: "Thursday",
          genres: ["Adventure", "Monster"],
        },
      ],
    };
  },
};
</script>