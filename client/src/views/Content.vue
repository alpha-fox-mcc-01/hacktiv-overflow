<template>
  <div style="justify-content: center;">
    <!-- ISINYA -->
    <div>
      <b-card class="contentCard">
        <SinglePost
          v-for="post in currentCategory"
          :key="post._id"
          :currentPost="post"
        />
      </b-card>
    </div>
    <!-- ISINYA -->
  </div>
</template>

<script>
import SinglePost from "@/components/SinglePost";
export default {
  components: {
    SinglePost
  },
  props: {
    backendPost: Array,
    frontendPost: Array
  },
  computed: {
    currentCategory() {
      return this.backendPost || this.frontendPost;
    }
  }
};
</script>

<style scoped>
.contentCard {
  margin: 0 50px;
  height: 80vh;
  overflow: auto;
}

@media screen and (max-width: 600px) {
  .contentCard {
    margin: 0;
    border: none;
  }
}
</style>