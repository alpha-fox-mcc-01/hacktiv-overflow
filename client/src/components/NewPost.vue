<template>
  <div style="justify-content: center;">
    <div>
      <b-card class="contentCard">
        <CreatePost />
      </b-card>
    </div>
  </div>
</template>

<script>
import CreatePost from "@/components/CreatePost";

export default {
  name: "newpost",
  components: {
    CreatePost
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