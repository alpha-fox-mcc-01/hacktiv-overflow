<template>
  <div style="justify-content: center;">
    <!-- ISINYA -->
    <div>
      <b-card class="contentCard" :title="post.title">
        {{ post.body }}
        <!-- <b>INI QUESTION</b><br />Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatibus ad deserunt ullam numquam aperiam illo
        nostrum fugiat! Ea eveniet quidem pariatur tempora, beatae perspiciatis,
        temporibus, est nulla ipsam blanditiis dolores. -->
      </b-card>
      <Answer />
    </div>
    <!-- ISINYA -->
  </div>
</template>

<script>
import Answer from "@/components/Answer.vue";
export default {
  name: "postdetail",
  components: {
    Answer
  },
  data() {
    return {
      post: ""
    };
  },
  methods: {
    fetchThisPost() {
      this.$store
        .dispatch("fetchOneQuestion", this.$route.params.id)
        .then(({ data }) => {
          console.log(data);
          this.post = data;
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    this.fetchThisPost();
  }
};
</script>
<style scoped>
.contentCard {
  margin: 20px 50px;
  /* height: 85vh; */
  overflow: auto;
}

@media screen and (max-width: 600px) {
  .contentCard {
    margin: 0;
    border: none;
  }
}
</style>
