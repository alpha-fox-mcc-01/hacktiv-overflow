<template>
 <div>
  <blockquote class="flex flex-wrap flex-col bg-white text-black-700 border-l-8 italic border-gray-400 px-4 py-3">
  <h3>{{question.title}}</h3>
  <p v-html="question.content.slice(0, 45)">{{question.content.slice(0, 45)}} . . . </p>
  <button @click="seeDetails(question._id)">Read More</button>
    <span class="flex justify-end text-sm text-indigo-400 font-semibold pt-2"> asked on {{question.created_at.slice(0, 10)}} by {{question.author.username}} </span>
  </blockquote>
 </div>
</template>


<script>
export default {
  name: 'QuestionCard',
  props: ['question'],
  methods: {
    seeDetails (id) {
      this.$router.push(`/${id}`)
    }
  }
}
</script>

<style scoped>
div {
  flex-direction: row;
}
</style>