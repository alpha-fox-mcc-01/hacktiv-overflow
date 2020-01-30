<template>
  <div class="">
    <form @submit.prevent="submitPost">
      <div class="form-group">
        <label>Title :</label>
        <input v-model="title" type="text" class="form-control">
      </div>

      <div class="form-group">
        <Editor
          v-model="content"
          :init="{
         height: 500,
         menubar: false,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'}"
        >
        </Editor>

      </div>

      <div class="form-group">
        <label>Language : </label>
        <input v-model="language" type="text" class="form-control">
        <small>separated by comma</small>
      </div>
      <input type="submit" value="Submit" class="btn btn-warning btn-lg btn-block col-3">
    </form>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
export default {
  props: ['submitType'],
  data () {
    return {
      title: '',
      language: '',
      content: ''
    }
  },
  components: {
    Editor
  },
  methods: {
    submitPost () {
      const payload = {
        title: this.title,
        language: this.language,
        content: this.content
      }
      if (this.type !== 'edit') {
        console.log('add new post')
        this.$store.dispatch('submitPost', payload)
          .then(({ data }) => {
            const notification = {
              type: 'success',
              title: 'Post Created',
              msg: 'thanks for submitting your post, please wait for your colleague to responds'
            }
            this.$store.commit('SET_NOTIFICATION', notification)
            this.$router.push('/dashboard')
          })
      } else {
        console.log('editing articles')
      }
    }
  }
}
</script>

<style>
.tox-notifications-container{
  display: none;
}
.tox-statusbar {
  display: none
}
</style>
