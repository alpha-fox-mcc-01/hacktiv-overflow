<template>
  <div>
    ini question details
    {{ idQuestion }}
  </div>
</template>

<script>
export default {
  name: 'QuestionDetails',
  computed: {
    idQuestion () {
      return this.$route.params.id
    }
  }
}
</script>

<style>

</style>
