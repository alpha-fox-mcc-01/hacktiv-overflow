<template>
  <div class="container">
    <h1>question title</h1>
  </div>
</template>

<script>
export default {
name: 'questionDetail',
  computed:{
    getId(){
      return this.$route.params
    }
  }
}
</script>

<style>

</style>