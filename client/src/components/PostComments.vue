<template>
<div class="">
  <div class="mt-4 ml-5 card rounded-lg" :class="{'border-success': comment.markedAsAnswer }">
    <div class="card-body ">

      <div class="d-flex align-items-start">
        <div class="mr-2 d-flex flex-column justify-content-center align-items-center">
          <i class="fas fa-chevron-up fa-btn text-secondary"></i>
          <div class="card p-1 m-1">12</div>
          <i class="fas fa-chevron-down fa-btn text-secondary"></i>
        </div>

        <div>
          <div class="">
            <div v-html="comment.comment"></div>
            <small><p>by: {{comment.userId.name}}</p></small>
          </div>
          <hr class="my-1" v-if="comment.markedAsAnswer">

          <div class="d-flex" v-if="activeUser">
            <div class="fa-btn mr-5" v-if="activeUser._id === comment.userId._id">
              <i @click="edit" class="far mr-2 fa-edit mb-2 text-dark"></i>edit
            </div>
            <div class="fa-btn" v-if="activeUser._id === postOwner">
              <i @click="markResolve" class="fas mr-2 fa-check mb-2 text-dark"></i>mark as resolved
            </div>
          </div>

          <div class=""  v-if="comment.markedAsAnswer">
            <span>Marked as answer by OP</span><i class="ml-1 fas text-success fa-check mb-3"></i>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['comment', 'postOwner'],
  computed: mapState({
    activeUser: 'activeUser'
  }),
  methods: {
    markResolve () {

    },
    edit () {

    }
  }
}
</script>

<style>

</style>
