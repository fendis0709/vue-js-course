<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="fetchResults">
          Load Submitted Experiences
        </base-button>
      </div>
      <p v-if="isFetching">Loading...</p>
      <div v-else>
        <div v-if="isError">
          <p>Something went wrong. Please try again later.</p>
        </div>
        <div v-else>
          <p v-if="!results.length">No data.</p>
          <ul v-else>
            <survey-result
              v-for="result in results"
              :key="result.id"
              :name="result.name"
              :rating="result.rate"
            ></survey-result>
          </ul>
        </div>
      </div>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isFetching: false,
      isError: false,
    };
  },
  props: {
    doFetchData: {
      type: Boolean,
    },
  },
  emits: ['reset-fetch-data'],
  methods: {
    fetchResults() {
      this.isFetching = true;
      fetch('https://vue-app-39aff-default-rtdb.firebaseio.com/survey.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isFetching = false;
          this.$emit('reset-fetch-data', true);
          let results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rate: data[id].rate,
            });
          }
          this.results = results;
        })
        .catch(() => {
          this.isFetching = false;
          this.isError = true;
          this.results = [];
        });
    },
  },
  watch: {
    doFetchData: function (newValue) {
      if (newValue) {
        this.fetchResults();
      }
    },
  },
  mounted() {
    this.fetchResults();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>