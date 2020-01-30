<template>
<div class="flex mb-4">
<div class="w-1/3">
<Sidebar></Sidebar>
</div> 
<div class="w-2/3 sm:w-1/2 md:w-1/3">
<h2>Question:</h2>
  <h3 class="font-sans font-thin mb-4">{{answers[0].questionId.title}}?</h3>
  <p class="text-grey mb-3">Tagged in #{{answers[0].questionId.category}}</p>
  <p class="text-grey-darkest mb-6 leading-tight">{{answers[0].questionId.content}}</p>
    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
     <i style="font-size:24px" class="fa">&#xf088;</i>
    </button>
    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
      <i style="font-size:24px" class="fa">&#xf087;</i>
    </button>
  <div>
  <h2>Answers:</h2>
  <AnswerCard v-for="answer in answers" :key="answer._id" :answer="answer"></AnswerCard>
  </div>
</div>    
</div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import AnswerCard from '@/components/AnswerCard.vue'
export default {
  name: 'QuestionPage',
  created: function () {
    this.$store.dispatch('getDetails', this.$route.params.id)
  },
  components: {
    Sidebar,
    AnswerCard
  },
  computed: {
    answers () {
      return this.$store.state.answers
    }
  }
}
</script>
