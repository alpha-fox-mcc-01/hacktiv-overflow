<template>
  <div class="home">
    <div>
      <b-tabs
        active-nav-item-class="font-weight-bold text-uppercase text-danger"
        content-class="mt-3"
        justified
      >
        <b-tab title="Back-End">
          {{ getBackEnd }}
          <Content :backendPost="getBackEnd" />
        </b-tab>
        <b-tab title="Front-End">
          {{ getFrondEnd }}
          <Content :frontendPost="getFrondEnd" />
        </b-tab>
        <b-tab title="New Post" v-if="access_token">
          <NewPost />
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import Content from "@/views/Content";
import NewPost from "@/components/NewPost";
import { mapState, mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    Content,
    NewPost
  },
  methods: {
    fetchAllQnA() {
      this.$store.dispatch("fetchQuestions");
      this.$store.dispatch("fetchAnswers");
    }
  },
  created() {
    this.fetchAllQnA();
  },
  computed: {
    ...mapState(["questions", "answers", "access_token"]),
    ...mapGetters(["getFrondEnd", "getBackEnd"])
  }
};
</script>

<style scoped>
</style>
