<template>
  <div class='content'>
    <div class='row'>
      <QuestionList v-if='!isViewing'/>
      <router-view />
      <UserSection />
    </div>
  </div>
</template>

<script>
import UserSection from '@/components/UserSection.vue'
import QuestionList from '@/components/QuestionList.vue'
export default {
  name: 'discover',
  components: {
    QuestionList,
    UserSection
  },
  computed: {
    isViewing () {
      return this.$store.state.isViewing
    }
  },
  created () {
    this.$store.dispatch('getQuestions')
  }
}
</script>

<style scoped>
.content {
  height: 51rem;
  width: 110rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
