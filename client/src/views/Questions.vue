<template>
  <div class="login">
    <Questions/>
  </div>
</template>

<script>
// @ is an alias to /src
import Questions from '@/components/Questions.vue'

export default {
  name: 'questions',
  components: {
    Questions
  }
}
</script>
