<template>
  <div class="flex mb-4">
    <div class="w-1/3"> 
    <Sidebar></Sidebar>
    </div>  
    <div class="w-1/3"> 
      <div class="font-sans flex items-center justify-center bg-blue-darker w-full py-8">
        <div class="overflow-hidden bg-white rounded max-w-xs w-full shadow-lg  leading-normal">
            <a class="block group hover:bg-blue p-4 border-b">
                <p class="font-bold text-lg mb-1 text-black group-hover:text-white">My Questions</p>
                <p v-for="question in myQuestions" :key="question._id" class="text-grey-darker mb-2 group-hover:text-white">- {{question.title}} <a><i class="fa fa-pencil" aria-hidden="true"></i></a> | <a><i  @click="deleteQuestion(question._id)" class="fa fa-trash" aria-hidden="true"></i></a></p> 
            </a>
             <a class="block group hover:bg-blue p-4 border-b">
                <p class="font-bold text-lg mb-1 text-black group-hover:text-white">My Answers</p>
                <p v-for="answer in myAnswers" :key="answer._id" class="text-grey-darker mb-2 group-hover:text-white">- {{answer.title}} <a><i class="fa fa-pencil" aria-hidden="true"></i></a> | <a><i @click="deleteAnswer(answer._id)" class="fa fa-trash" aria-hidden="true"></i></a></p> 
            </a>
        </div>
      </div>
    </div>        
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Swal from 'sweetalert2'
export default {
    name: 'MyProfile',
    components: {
        Sidebar
    },
    created: function () {
      this.$store.dispatch('fetchMyQuestions')
      this.$store.dispatch('fetchMyAnswers')
    },
    computed: {
      myQuestions () {
        return this.$store.state.myQuestions
      },
      myAnswers () {
        return this.$store.state.myAnswers
      }
    },
    methods: {
      deleteAnswer (id) {
        this.$store.dispatch('deleteAnswer', id)
            .then(({ data }) => {
              this.$store.dispatch('fetchMyAnswers')
              Swal.fire('Ok', 'Your answer has been deleted', 'success')
            })
            .catch(err => {
              Swal.fire('Oops..', 'An error occured', 'error')
            })
      }
    }

}
</script>