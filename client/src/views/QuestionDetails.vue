<template>
  <div class="card my-2 shadow w-100 container">
    <div class="row">
      <div class="col-1 my-5 mx-3">
        <div class="row">
          <button>
          <i class="fas fa-angle-up"></i>
        </button>
        </div>
        <div class="row">
          <h1>{{ question.vote }}</h1>
        </div>
        <div class="row">
          <button>
            <i class="fas fa-angle-down"></i>
          </button>
        </div>
      </div>
      <div class="col">
        <div class="card-header bg-white">
          <h4>Question Title : {{ question.title }}</h4>
          <small>Posted By: {{question.userId.username}}</small><br>
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
        <form @submit.prevent="addAnswer">
          <div class="form-group">
            <label for="title">Answer Title</label>
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
      answers: []
    }
  },
  components: {
    AnswerCard
  },
  methods: {
    getQuestion () {
      axios({
        method: 'GET',
        url: `http://localhost:3000/questions/${this.$route.params.id}`
      })
        .then(({ data }) => {
          // console.log(data)
          this.question = data
          console.log(this.question)
          this.answers = data.answerId
        })
        .catch(err => {
          console.log(err)
        })
    },
    addAnswer () {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/answers',
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
          // console.log(data)
          this.getQuestion()
          this.title = ''
          this.content = ''
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getQuestion()
  }
}
</script>

<style>

</style>
