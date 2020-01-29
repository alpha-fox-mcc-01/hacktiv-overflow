<template>
  <div
    style="justify-content: center; margin-bottom: 1rem;"
    @click="postDetail(currentPost._id)"
  >
    <!-- ISINYA -->
    <div>
      <b-row>
        <b-col cols="1" style="display: flex; justify-content: flex-end;">
          <b-card style="height: 100%;">
            <b-row style="justify-content: center;">{{ totalVoters }}</b-row>
            <b-row style="justify-content: center; font-size: 12px;"
              >votes</b-row
            >
            <b-row style="justify-content: center;">{{
              currentPost.answers.length
            }}</b-row>
            <b-row style="justify-content: center; font-size: 12px;"
              >answers</b-row
            >
          </b-card>
        </b-col>
        <b-col>
          <b-card :title="currentPost.title" sub-title="Card subtitle">
            <b-card-text>
              {{ currentPost.body }}
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <!-- ISINYA -->
  </div>
</template>

<script>
export default {
  props: {
    currentPost: Object
  },
  computed: {
    totalVoters() {
      return (
        this.currentPost.upvoters.length + this.currentPost.downvoters.length
      );
    }
  },
  methods: {
    postDetail(id) {
      this.$router.push("/post/" + id);
    }
  }
};
</script>

<style scoped>
</style>
