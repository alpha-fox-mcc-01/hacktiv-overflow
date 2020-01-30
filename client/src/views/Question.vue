<template>
  <div class="container">
    <div class="row border-bottom mb-3">
      <div class="col">
        <h3 class="mt-4">Question page</h3>
      </div>
      <div class="col">
        <button class="btn btn-warning mt-3"
          @click="changePage('/question/add')"
          v-if="isLogin"
        >Add Question</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Question',
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  methods: {
    changePage(page) {
      this.$router.push(page);
    },
  },
};
</script>

<style scoped>
</style>
