<template>
  <div class="register">
    <myRegister/>
  </div>
</template>

<script>
// @ is an alias to /src
import myRegister from '@/components/Register.vue'

export default {
  name: 'home',
  components: {
    myRegister
  }
}
</script>
