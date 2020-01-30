<template>
  <div class="login">
    <myLogin/>
  </div>
</template>

<script>
// @ is an alias to /src
import myLogin from '@/components/Login.vue'

export default {
  name: 'login',
  components: {
    myLogin
  }
}
</script>
