<template>
  <div class="row">
    <PostTitle v-for="post in posts" :key="post._id" :post="post" />
  </div>
</template>

<script>
import PostTitle from '../components/PostTitle'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      posts: []
    }
  },
  components: {
    PostTitle
  },
  methods: {
    fetchAll () {
      console.log('show all')
    }
  },
  computed: mapState({

  }),
  watchers: {

  },
  created () {
    this.$store.dispatch('fetchAll')
      .then(({ data }) => {
        this.posts = data
      })
      .catch(err => {
        throw err
      })
  }
}
</script>

<style>

</style>
