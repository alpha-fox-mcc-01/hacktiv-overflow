<template>
  <div class="flex mb-4">
    <div class="w-1/3">
    </div>
    <div class="w-1/3">
      <form @submit.prevent="editAnswer">
        <label class="block text-gray-600 font-bold bg:grey mb-3 md:mb-0 pr-4" for="my-textfield">
        Title
        </label>
        <input v-model="title" class="form-input block w-full focus:bg-gray-200" id="title" type="text" value="" :placeholder="preTitle">
        <tinymce id="d1" :placeholder="preContent" v-model="content"></tinymce>
        <input type="submit" class="shadow bg-orange-700 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
      </form>
    </div>
  </div>   
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name: 'EditAnswer',
    created: function () {
        this.$store.dispatch('getDetails', this.$route.params.id)
    },
    computed: {
      preTitle () {
        return this.$store.state.preEditAnswer.title
      },
      preContent () {
        return this.$store.state.preEditAnswer.content
      }
    },
    data () {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      editAnswer () {
        let payload = {
          title: this.title,
          content: this.content,
          id: this.$route.params.id
        }
        this.$store.dispatch('editAnswer', payload)
            .then( _ => {
              Swal.fire('Yay!', 'Edit successful', 'success')
              this.$router.push('/')
            })
            .catch(err => {
              Swal.fire('Oops..', 'An error occured', 'error')
            })
      }
    }
}
</script>