<template>
  <div class="">
    <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <i @click="toggle" class="fas fa-btn fa-bars mr-3"></i>
        <h3>{{listTitle}}</h3>
      </div>
    </div>

    <div v-if="isCollapsed">
      <hr class="my-2">
      <div class="d-flex flex-wrap">
        <PostTitle v-for="post in posts" :key="post._id" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import PostTitle from '../components/PostTitle'
export default {
  data () {
    return {
      isCollapsed: true
    }
  },
  props: ['listTitle', 'posts'],
  components: {
    PostTitle
  },
  methods: {
    toggle () {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
</script>

<style>

</style>
