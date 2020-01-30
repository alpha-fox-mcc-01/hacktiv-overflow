<template>
  <div>
    <b-button v-b-modal.modal-1>Post an answer</b-button>
    <b-modal id="modal-1" title="Input your title">
      <form @submit.prevent="postAnswer">
      <label>
      Title
      </label>
      <input v-model="title" value="" placeholder="Your title goes here.........">
      <tinymce v-model="content"></tinymce>
      <input type="submit">
      </form>
    </b-modal>
  </div> 
</template>

<script>
import Swal from 'sweetalert2'
import tinymce from 'vue-tinymce-editor'
export default {
  name: 'PostAnswer',
  components: {
    tinymce
  },
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    postAnswer () {
      console.log('kepanggil')
      let payload = {
        title: this.title,
        id: this.$route.params.id,
        content: this.content
      }
      this.$store.dispatch('postAnswer', payload)
          .then(({ data }) => {
            this.$store.dispatch('getDetails', this.$route.params.id)
            Swal.fire('Yay!!', 'Your answer has been posted!', 'success')
          })
          .catch(err => {
            Swal.fire('Oops...', 'You have to log in to post answers', 'error')
          }) 
    } 
  }
}
</script>