<template>
  <div class="flex mb-4">
    <div class="w-1/3">
    </div>
    <div class="w-1/3">
      <form @submit.prevent="post">
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
import tinymce from 'vue-tinymce-editor'
import Swal from 'sweetalert2'
export default {
    name: 'InputForm',
    data () {
      return {
        title: '',
        content: ''
      }
    },
    components: {
        tinymce
    },
    methods: {
      post () {
        let payload = {
          title: this.title,
          content: this.content
        }
        this.$store.dispatch('postQuestion', payload)
            .then(({ data }) => {
              Swal.fire('Yay!!', 'Your question is successfully posted', 'success')
              this.$router.push('/')
            })
            .catch(err => {
              console.log(err)
            })
      }
    }
}
</script>