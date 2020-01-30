<template>
  <div class="container">
    <mdb-card class="mx-5">
    <mdb-card-body>
      <mdb-card-title style="text-align: left;"><h1>Your Question</h1></mdb-card-title>
      <form class="mt-2">
        <tinymce-editor v-model="question"/>
        <mdb-btn type="submit" color="default" rounded>Submit</mdb-btn>
      </form>
    </mdb-card-body>
  </mdb-card>

  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import { mdbBtn } from 'mdbvue'
export default {
  name: 'PostQuestion',
  data () {
    return {
      question: ''
    }
  },
  components: {
    'tinymce-editor': Editor,
    mdbBtn
  }
}
</script>

<style>

</style>
