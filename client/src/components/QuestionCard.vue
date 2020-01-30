<template>
 <div class="w-1/3">
  <blockquote class="flex flex-wrap flex-col bg-white text-indigo-700 border-l-8 italic border-gray-400 px-4 py-3">
  <h3>Question?</h3>
  Intro question
    <span class="flex justify-end text-sm text-indigo-400 font-semibold pt-2 underline ">Author</span>
  </blockquote>
 </div>
</template>


<script>
export default {
  name: 'QuestionCard',
  created: function () {
    this.$store.dispatch('fetchQuestions')
  }
}
</script>