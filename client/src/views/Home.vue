<template>
  <div class="home" style=" padding-top: 80px;">
    <img
      class="mb-1"
      alt="disctractor"
      src="https://gifimage.net/wp-content/uploads/2017/09/anime-chibi-gif-2.gif"
      style="max-width: 250px"
    />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1 style="font-family: 'Patrick Hand SC', cursive">
      <strong>Public questions</strong>
    </h1>
    <div class="container mt-4">
      <PublicQuestionCard 
      v-for="item in questions"
      :key="item._id"
      />

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import PublicQuestionCard from '../components/PublicQuestionCard.vue'
export default {
  name: "home",
  components: {
    HelloWorld,
    PublicQuestionCard
  },
  computed: {
    questions() {
      return this.$store.state.questions;
    }
  },
  created() {
    this.$store.dispatch("fetchQuestions");
  }
};
</script>
