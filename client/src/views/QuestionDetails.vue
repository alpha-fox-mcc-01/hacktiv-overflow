<template>
  <div class="card my-2 shadow w-100 container">
    <div class="row">
      <div class="col-1 my-5 mx-3">
        <div class="row">
          <button @click="vote(1, question._id)">
            <i class="fas fa-angle-up"></i>
          </button>
        </div>
        <div class="row">
          <h1>{{ question.vote }}</h1>
        </div>
        <div class="row">
          <button @click="vote(-1, question._id)">
            <i class="fas fa-angle-down"></i>
          </button>
        </div>
      </div>
      <div class="col">
        <div class="card-header bg-white">
          <h4>Question Title : {{ question.title }}</h4>
          <small>Posted By: {{username}}</small><br>
          <small>Posted At: {{question.created_at}}</small>
        </div>
        <div class="card-body text-left">
          <div class="card-text">
          {{ question.content }}
          </div>
        </div>
      </div>
    </div>
    <p>Answer</p>
    <div
      class="row"
      v-for="answer in answers"
      :key="answer._id"
    >
    <AnswerCard :answer="answer"/>
    </div>
    <div class="row">
      <div class="col">
      <h3>Post an Answer Here</h3>
        <form @submit.prevent="addAnswer">
          <div class="form-group">
            <input type="text" class="form-control" id="title" placeholder="Answer title" v-model="title" required>
          </div>
          <div class="form-group">
            <label for="textarea">Your Answer</label>
            <textarea class="form-control" id="textarea" rows="3" v-model="content"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Answer</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AnswerCard from '../components/AnswerCard'
export default {
  name: 'question-detail',
  data () {
    return {
      question: {},
      title: '',
      content: '',
      answers: [],
      username: ''
    }
  },
  components: {
    AnswerCard
  },
  methods: {
    getQuestion () {
      axios({
        method: 'GET',
        url: `http://apioverflow.gandasipayung.site/questions/${this.$route.params.id}`
      })
        .then(({ data }) => {
          this.question = data
          this.username = this.question.userId.username
          this.answers = data.answerId
        })
        .catch(_ => {
        })
    },
    addAnswer () {
      axios({
        method: 'POST',
        url: 'http://apioverflow.gandasipayung.site/answers',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          title: this.title,
          content: this.content,
          questionId: this.question._id
        }
      })
        .then(({ data }) => {
          this.getQuestion()
          this.title = ''
          this.content = ''
        })
        .catch(_ => {
        })
    },
    vote (num, id) {
      this.$store.dispatch('vote', { num, id })
    }
  },
  created () {
    this.getQuestion()
  }
}
</script>

<style>

</style>
