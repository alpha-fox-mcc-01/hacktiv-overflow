<template>
  <div class="container my-5">
    <router-link :to="'/dashboard/newpost'">
      <a :to="'/newpost'" class="btn btn-primary mb-5 btn-lg btn-warning text-dark">Write New Post</a>
    </router-link>
    <CardList :posts="unresolvedPosts" :listTitle="'Your Unresolved Question'" />
    <div class="my-4"></div>
    <CardList :posts="posts" :listTitle="'Your Questions'" />
  </div>
</template>

<script>
import CardList from '../components/CardList'
import { mapState } from 'vuex'
export default {
  name: 'Dashboard',
  components: {
    CardList
  },
  computed: mapState({
    posts: 'posts',
    unresolvedPosts: 'unresolvedPosts'
  }),
  created () {
    this.$store.dispatch('fetchMyPost')
      .then(({ data }) => {
        this.$store.commit('MAP_POSTS', data)
      })
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('access_token')) {
      next()
    } else {
      next('/')
    }
  }
}
</script>

<style>

</style>
