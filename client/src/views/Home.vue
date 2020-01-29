<template>
  <div class="home">
    <div class="container">
      <h1 style="text-align: left;" class="ml-2 mt-2">Top Question</h1>
      <n-list-question/>
      <hr>
      <div class="mt-2" style="text-align: left;">
        <h3 class="ml-2">Ask here</h3>
        <form>
          <tinymce-editor v-model="question"/>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import nListQuestion from '../components/n-listQuestion'
import Editor from '@tinymce/tinymce-vue'
export default {
  name: 'home',
  data () {
    return {
      question: ''
    }
  },
  components: {
    nListQuestion,
    'tinymce-editor': Editor
  }
}
</script>
