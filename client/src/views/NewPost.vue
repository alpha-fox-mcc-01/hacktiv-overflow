<template>
  <div class="container mt-5">
    <h3 class="mb-5">Add new Post</h3>
    <PostForm :submitType="'add'"/>
    <br><br>
    <br><br>
  </div>
</template>

<script>
import PostForm from '../components/PostForm'
export default {
  components: {
    PostForm
  },
  methods: {

  }
}
</script>

<style>

</style>
