<template>
  <div>
    <learning-survey @fetch-data="doFetchData"></learning-survey>
    <user-experiences
      :do-fetch-data="isFetchData"
      @reset-fetch-data="resetFetchData"
    ></user-experiences>
  </div>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },
  data() {
    return {
      isFetchData: false,
    };
  },
  methods: {
    doFetchData() {
      this.isFetchData = true;
    },
    resetFetchData() {
      this.isFetchData = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>