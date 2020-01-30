<template>
  <div class="home">
    <div class="container">
      <h1 style="text-align: left;" class="ml-2 mt-2">Top Question</h1>
      <n-list-question/>
      <hr>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import nListQuestion from '../components/n-listQuestion'

export default {
  name: 'home',
  data () {
    return {
      question: ''
    }
  },
  components: {
    nListQuestion
  }
}
</script>
