<template>
  <div class='col-md-8'>
    <div class='row'>
      <h1>Discussions &amp; Articles</h1><b-button id='create-post-btn' @click="goDiscover" pill>Create New Post</b-button>
    </div>
    <div class='row'>
      <p id='view-all'>View all {{ numberOfQuestions }} discussions</p>
    </div>
    <div class='content'>
      <MinifiedQuestion v-for='question in questions' :question='question' :key='question._id'/>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import MinifiedQuestion from '@/components/MinifiedQuestion.vue'
export default {
  name: 'RecentDiscussions',
  methods: {
    goDiscover () {
      if (localStorage.getItem('access_token')) {
        this.$router.push('/discover')
      } else {
        this.$router.push('/signup')
      }
    }
  },
  computed: {
    numberOfQuestions () {
      return this.$store.state.questions.length
    },
    questions () {
      return this.$store.state.questions.slice(4, 9)
    }
  },
  components: {
    MinifiedQuestion
  }
}
</script>

<style scoped>
.btn-secondary {
    color: #fff;
    background-color: rgb(132, 0, 255);
    border-color: rgb(132, 0, 255);
}
.btn-secondary:hover{
  background-color: rgb(132, 0, 255);
  border-color: rgb(132, 0, 255);
  opacity: 0.7;
  transition: .7s ease;
}
#create-post-btn {
  margin-left: auto;
}
#view-all {
  opacity: 0.7;
  cursor: pointer;
}
#view-all:hover {
  opacity: 1.2;
  transition: .7s ease;
}
</style>
