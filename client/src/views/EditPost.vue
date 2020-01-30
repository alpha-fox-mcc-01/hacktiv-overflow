<template>
  <div class="container mt-5">
    <h3 class="mb-5">Edit Post</h3>
    <PostForm :post="post" :submitType="'edit'"/>
    <br><br>
    <br><br>
  </div>
</template>

<script>
import PostForm from '../components/PostForm'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      post: {}
    }
  },
  components: {
    PostForm
  },
  methods: {

  },
  computed: mapState({
    editedPostId: 'editedPostId'
  }),
  created () {
    this.$store.dispatch('fetchOne', this.editedPostId)
      .then(({ data }) => {
        this.post = data
      })
      .catch(err => {
        throw err
      })
  }
}
</script>

<style>

</style>
