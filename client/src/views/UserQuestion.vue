<template>
  <div class="container">
    <div class="row border-bottom mb-3">
      <div class="col">
        <h3 class="mt-4">{{ userName }}'s Question page</h3>
      </div>
      <div class="col">
        <button class="btn btn-warning mt-3"
          @click="changePage('/question/add')"
          v-if="isLogin"
        >Add Question</button>
      </div>
    </div>
    <router-view />
    <ListQuestions />
  </div>
</template>

<script>
import ListQuestions from '../components/ListQuestion.vue';

export default {
  name: 'UserQuestion',
  computed: {
    userName() {
      return localStorage.getItem('userName');
    },
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  components: {
    ListQuestions,
  },
  methods: {
    changePage(page) {
      this.$router.push(page);
    },
  },
};
</script>

<style>

</style>
