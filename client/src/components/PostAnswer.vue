<template>
  <div class="flex mb-4">
    <div class="w-1/3">
    </div>
    <div class="w-1/3">
      <form @submit.prevent="postAnswer">
        <label class="block text-gray-600 font-bold bg:grey mb-3 md:mb-0 pr-4" for="my-textfield">
        Title
        </label>
        <input v-model="title" class="form-input block w-full focus:bg-gray-200" id="title" type="text" value="" placeholder="Your title goes here.........">
        <tinymce id="d1" v-model="content"></tinymce>
        <input type="submit" class="shadow bg-orange-700 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
      </form>
    </div>
  </div>   
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'PostAnswer',
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
          Swal.fire('Yay!!', 'Your answer has been posted!', 'success')
          this.$router.push({ path: `/${this.$route.params.id}` })
        })
        .catch(err => {
          Swal.fire('Oops...', 'You have to log in to post answers', 'error')
        })
    }
  }
}
</script>
