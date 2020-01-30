<template>
  <div class="container">
    <mdb-card class="mx-5 mt-3">
    <mdb-card-body>
      <mdb-card-title style="text-align: left;"><h1>Your Question</h1></mdb-card-title>
      <form class="mt-2" @submit.prevent="addPost">
        <mdb-input label="Title" v-model="title" />
        <tinymce-editor v-model="question" style="height: 60vh"/>
        <mdb-btn type="submit" color="default">Submit</mdb-btn>
      </form>
    </mdb-card-body>
  </mdb-card>

  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import { mdbBtn, mdbCard, mdbCardBody, mdbCardTitle, mdbInput } from 'mdbvue'
export default {
  name: 'PostQuestion',
  data () {
    return {
      question: '',
      title: ''
    }
  },
  methods: {
    addPost () {
      console.log(this.question)
      this.$store.dispatch('postQuestion', {
        title: this.title,
        description: this.question
      })
        .then(({ data }) => {
          console.log(data, 'ini di post')
          console.log('berhasil post Question')
          this.$store.dispatch('fetchQuestions')
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err, 'ini error')
        })
    }
  },
  components: {
    'tinymce-editor': Editor,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbInput
  }
}
</script>

<style>

</style>
