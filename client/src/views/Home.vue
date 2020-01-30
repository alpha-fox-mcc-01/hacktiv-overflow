<template>
  <div class="home">
    <div class="flex flex-wrap overflow-hidden">
        <div class="w-1/3 h-12">
        <Sidebar></Sidebar>
        </div>
        <QuestionCard></QuestionCard>
    </div>
  </div>
</template>

<script>
import QuestionCard from '@/components/QuestionCard.vue'
import Sidebar from '@/components/Sidebar.vue'
export default {
  name: 'home',
  components: {
    QuestionCard,
    Sidebar
  },
  created: function () {
    this.$store.dispatch('fetchQuestions')
  }
}
</script>
