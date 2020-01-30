<template>
  <div class="container">
    <mdb-card class="mx-5 mt-3">
    <mdb-card-body>
      <mdb-card-title style="text-align: left;"><h1>Your Question</h1></mdb-card-title>
      <form class="mt-2">
        <tinymce-editor v-model="question" style="height: 60vh"/>
        <mdb-btn type="submit" color="default" @click.prevent="addPost">Submit</mdb-btn>
      </form>
    </mdb-card-body>
  </mdb-card>

  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import { mdbBtn, mdbCard, mdbCardBody, mdbCardTitle } from 'mdbvue'
export default {
  name: 'PostQuestion',
  data () {
    return {
      question: ''
    }
  },
  methods: {
    addPost () {
      console.log('masuk ke add Post view post question')
    }
  },
  components: {
    'tinymce-editor': Editor,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardTitle
  }
}
</script>

<style>

</style>
