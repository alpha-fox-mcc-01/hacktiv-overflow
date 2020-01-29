<template>
  <div class="home">
    <div>
      <b-tabs
        active-nav-item-class="font-weight-bold text-uppercase text-danger"
        content-class="mt-3"
        justified
      >
        <b-tab title="Back-End">
          <Content />
        </b-tab>
        <b-tab title="Front-End">
          <Content />
        </b-tab>
        <b-tab title="New Post">
          <NewPost />
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import Content from "@/views/Content";
import NewPost from "@/components/NewPost";

export default {
  name: "home",
  components: {
    Content,
    NewPost
  }
};
</script>

<style scoped>
</style>
