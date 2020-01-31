<template>
  <div class='content row'>
    <div class='col-md-8'>
      <div class='row'>
        <div class='col-md-1'>
          <b-card class='question-detail'>
            <img class='upvote-arrow' @click='vote(1)' src='../../public/arrow.png' width="40" height="40">
            <hr>
            <img class='downvote-arrow' @click='vote(-1)' src='../../public/arrow.png' style='transform: rotate(180deg)' width="40" height="40">
          </b-card>
        </div>
        <div class='col-md-1'>
          <b-card class='question-detail'>
            <h2 style='margin-top: 2rem; margin-left: 0.5rem;'>{{ reputation }}</h2>
          </b-card>
        </div>
        <div class='col-md-10'>
          <b-card class='question-detail' :title="question.title" :sub-title="question.questionedBy.username">
            <b-card-text v-html='question.description'>
              {{ question.description }}
            </b-card-text>
            <b-card-text style='color: rgb(132, 0, 255);'>
              Tags: {{ question.tags.join(',') }}
            </b-card-text>
            <b-card-text>
                <p style='opacity: 0.7;'>Last Edited: {{ question.updatedAt }}</p>
            </b-card-text>
          </b-card>
        </div>
      </div>
      <hr>
      <h5 style='opacity: 0.5;'>Reply to this question...</h5>
      <TextEditor :purpose="'newAnswer'"/>
      <br>
      <br>
      <h1>{{ answers.length }} &nbsp; <span v-if='answers.length>1 || answers.length===0'>Replies</span><span v-else>Reply</span></h1>
      <hr>
      <AnswerCard @get-answers="$store.dispatch('getQuestionAnswers', question._id)" v-for='answer in answers' :key='answer._id' :answer='answer'/>
    </div>
    <UserSection />
  </div>
</template>

<script>
import UserSection from '@/components/UserSection.vue'
import TextEditor from '@/components/Editor.vue'
import AnswerCard from '@/components/AnswerCard.vue'
export default {
  name: 'questionDetail',
  data () {
    return {
      reputation: 0
    }
  },
  components: {
    AnswerCard,
    TextEditor,
    UserSection
  },
  methods: {
    vote (value) {
      if (localStorage.getItem('access_token')) {
      this.$store.dispatch('voteQuestion', {
        value,
        _id: this.$route.params.id
      })
        .then(() => {
          this.$store.dispatch('getQuestionDetail', this.$route.params.id)
          this.getReputation()
        })
        .catch(err => {
          console.log(err)
        })
      } else {
        this.$router.push('/signup')
      }
    },
    getReputation () {
      let value = 0
      if (this.question.votes.length) {
        this.question.votes.forEach(vote => {
          value += Number(vote.value)
        })
      }
      this.reputation = value
    }
  },
  computed: {
    question () {
      return this.$store.state.questionDetail
    },
    answers () {
      return this.$store.state.answers
    }
  },
  created () {
    this.$store.dispatch('getQuestionDetail', this.$route.params.id)
    this.$store.dispatch('getQuestionAnswers', this.$route.params.id)
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
.question-detail {
  min-height: 10rem;
}
.upvote-arrow, .downvote-arrow {
  cursor: pointer;
}
</style>
