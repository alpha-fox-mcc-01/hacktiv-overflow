<template>
  <div>
    <div class="flex mb-4">
        <div class="w-1/3 h-12">
        <Sidebar></Sidebar>
        </div>
        <div class="w-1/3 h-12">
        <QuestionCard v-for="question in questions" :key="question._id" :question="question"></QuestionCard>
        </div>
    </div>
  </div>
</template>

<script>
import QuestionCard from '@/components/QuestionCard.vue'
import Sidebar from '@/components/Sidebar.vue'
export default {
  name: 'home',
  computed: {
    questions () {
      return this.$store.state.questions
    }
  },
  components: {
    QuestionCard,
    Sidebar
  },
  created: function () {
    this.$store.dispatch('fetchQuestions')
  }
}
</script>
