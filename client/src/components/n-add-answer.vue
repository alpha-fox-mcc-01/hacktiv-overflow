<template>
  <mdb-card class="mx-5 mt-3">
    <div style="width: 100%">
      <mdb-card-body  style="text-align: left;">
        <mdb-card-title><h3>Answer here</h3></mdb-card-title>
        <p>Do you know how to solve the problem? Feel free to post your answers here.</p>
        <mdb-alert color="danger" v-if="alert">
            {{ alert }}
          </mdb-alert>
        <form class="mt-2" @submit.prevent="addPost">
          <mdb-input label="Title" v-model="title" />
          <tinymce-editor v-model="answer"/>
          <mdb-btn type="submit" color="default" class="mt-3">Submit</mdb-btn>
        </form>
      </mdb-card-body>
    </div>
  </mdb-card>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import { mdbBtn, mdbCard, mdbCardBody, mdbCardTitle, mdbInput, mdbAlert } from 'mdbvue'
export default {
  name: 'PostQuestion',
  data () {
    return {
      answer: '',
      title: '',
      alert: ''
    }
  },
  props: ['idQuestion'],
  methods: {
    addPost () {
      console.log(this.answer)
      this.$store.dispatch('postAnswer', {
        data: {
          title: this.title,
          description: this.answer
        },
        questionId: this.idQuestion
      })
        .then(({ data }) => {
          console.log(data, 'ini di post')
          console.log('berhasil post answer')
          this.$emit('fetch-answers')
          this.answer = ''
          this.title = ''
        })
        .catch(err => {
          console.log(err.response, 'ini error')
          this.alert = err.response.data.msg
          this.answer = ''
          this.title = ''
          setTimeout(_ => {
            this.alert = ''
          }, 3000)
        })
    }
  },
  components: {
    'tinymce-editor': Editor,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbInput,
    mdbAlert
  }
}
</script>

<style>

</style>
