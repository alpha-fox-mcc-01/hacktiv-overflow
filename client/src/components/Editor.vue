<template>
  <div>
    <b-form-input v-model='title' size="sm" class="mr-sm-2" placeholder='title'></b-form-input>
    <b-form-input v-model='tags' size="sm" class="mr-sm-2" placeholder='enter tags separated by commas e.g. Python,MariaDB' v-if="purpose==='newQuestion'"></b-form-input>
    <editor
    v-model='description'
    api-key="xz070feerzn7an1h8txc48y372qdauaphrppmw3h01y7k653"
    initialValue="<p style='opacity: 0.5;'>elaborate</p>"
    :init="{
      height: 200,
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
      ],
      toolbar:
        'undo redo | formatselect | bold italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | removeformat | help'
    }"
    ></editor>
    <br>
    <b-button variant='light' @click='newText'>Submit</b-button>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
export default {
  name: 'texteditor',
  data () {
    return {
      title: '',
      description: '',
      tags: ''
    }
  },
  props: {
    purpose: String
  },
  methods: {
    newText () {
      if (localStorage.getItem('access_token')) {
      this.$store.dispatch(this.purpose, {
        title: this.title,
        description: this.description,
        tags: this.tags,
        _id: this.$route.params.id,
      })
        .then(({ data }) => {
          this.title = ''
          this.description = ''
          this.tags = ''
          if (this.purpose === 'newAnswer') {
            this.$store.dispatch('getQuestionAnswers', this.$route.params.id)
          } else {
            this.$store.dispatch('getQuestions')
            this.$store.dispatch('getUserQuestions')
          }
        })
        .catch(err => {
          console.log(err)
        })
      } else {
        this.$router.push('/signup')
      }
    }
  },
  components: {
    Editor
  }
}
</script>

<style scoped>

</style>
