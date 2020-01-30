<template>
  <div class='content'>
    <div class='col-md-9'>
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
            <b-card-text>
              {{ question.description }}
            </b-card-text>
            <b-card-text>
                <p style='opacity: 0.7;'>Last Edited: {{ question.updatedAt }}</p>
            </b-card-text>
          </b-card>
        </div>
      </div>
      <hr>
      <h5 style='opacity: 0.5;'>Reply to this question...</h5>
      <b-form-input v-model='title' size="sm" class="mr-sm-2" placeholder='title'></b-form-input>
      <editor
       v-model='description'
       api-key="xz070feerzn7an1h8txc48y372qdauaphrppmw3h01y7k653"
       initialValue="<p style='opacity: 0.5;'>elaborate</p>"
       :init="{
         height: 200,
         menubar: false,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
       }"
       ></editor>
       <br>
       <b-button variant='light' @click='newAnswer'>Submit</b-button>
       <br>
      <br>
      <h1>{{ answers.length }} &nbsp; <span v-if='answers.length>1 || answers.length===0'>Replies</span><span v-else>Reply</span></h1>
      <hr>
      <AnswerCard @get-answers="$store.dispatch('getQuestionAnswers', question._id)" v-for='answer in answers' :key='answer._id' :answer='answer'/>
    </div>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import AnswerCard from '@/components/AnswerCard.vue'
export default {
  name: 'questionDetail',
  data () {
    return {
      title: '',
      description: '',
      reputation: 0
    }
  },
  components: {
    Editor,
    AnswerCard
  },
  methods: {
    newAnswer () {
      this.$store.dispatch('newAnswer', {
        title: this.title,
        description: this.description,
        _id: this.question._id
      })
        .then(({ data }) => {
          this.$store.dispatch('getQuestionAnswers', this.$route.params.id)
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    vote (value) {
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
