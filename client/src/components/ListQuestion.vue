<template>
  <div class="row p-3">
    <CardQuestion
      v-for="question in questions" :key="question._id"
      :question="question"
    />
  </div>
</template>

<script>
import CardQuestion from './CardQuestion.vue';

export default {
  name: 'ListQuestion',
  computed: {
    questions() {
      if (this.$route.path === '/myquestion') {
        return this.$store.state.userQuestions;
      }
      return this.$store.state.questions;
    },
  },
  components: {
    CardQuestion,
  },
  created() {
    if (this.$route.path === '/myquestion') {
      this.$store.dispatch('fetchUserQuestions');
    } else {
      this.$store.dispatch('fetchAllQuestions');
    }
  },
};
</script>

<style>

</style>
