<template>
<div v-if="notification">
  <div
    class="notification px-3"
    v-bind:class="{
      'alert-success':notification.type=='success',
      'alert-danger':notification.type=='fail'
      }"
  >

    <div class="d-flex justify-content-center align-items-center">
      <div class="">
        <strong>{{notification.title}}</strong>
      </div>
      <div class="ml-2 mr-4">
        {{notification.msg}}
      </div>

      <div class="">
        <i class="fas fa-btn fa-times"
          @click="dismissNotification"
        ></i>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return { }
  },
  methods: {
    dismissNotification () {
      this.$store.commit('UNSET_NOTIFICATION')
    }
  },
  computed: mapState({
    notification: 'activeNotification'
  })
}
</script>

<style>
.fa-btn {
  cursor: pointer;
  transition-duration: 0.3s;
}
.fa-btn:hover {
  transform: translateY(2px)
}
.notification {
  padding: 0.3em;
}
</style>
