<template>
<div class="flex mb-4">
<div class="w-1/3">
<Sidebar></Sidebar>
</div> 
<div v-if="isAnswered === false" style="margin-top: 2em;">
  <p>This question is still unanswered</p>
</div>
<div>
  <button @click="postAnswer">Post an answer</button>
  <router-view></router-view>
</div>
<div v-if="isAnswered === true" class="w-2/3 sm:w-1/2 md:w-1/3">
<h2>Question:</h2>
  <h3 class="font-sans font-thin mb-4">{{answers[0].questionId.title}}?</h3>
  <p class="text-grey mb-3">Tagged in #{{answers[0].questionId.category}}</p>
  <p v-html="answers[0].questionId.content" class="text-grey-darkest mb-6 leading-tight">{{answers[0].questionId.content}}</p>
    <button @click="vote(-1, answers[0].questionId._id)" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
      <p class="text-xs ...">{{downvote}}</p>
     <i style="font-size:24px" class="fa">&#xf088;</i>
    </button>
    <button @click="vote(1, answers[0].questionId._id)" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
      <p class="text-xs ...">{{upvote}}</p>
      <i style="font-size:24px" class="fa">&#xf087;</i>
    </button>
  <div>
  <h2>Answers:</h2>
  <AnswerCard v-for="answer in answers" :key="answer._id" :answer="answer"></AnswerCard>
  </div>
</div>    
</div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import AnswerCard from '@/components/AnswerCard.vue'
import PostAnswer from '@/components/PostAnswer.vue'
export default {
  name: 'QuestionPage',
  created: function () {
    this.$store.dispatch('getDetails', this.$route.params.id)
    if (this.answers.length === 0) {
      this.isAnswered = false
    } else {
      this.isAnswered = true
    }
  },
  data () {
    return {
      isAnswered: false
    }
  },
  components: {
    Sidebar,
    AnswerCard,
    PostAnswer
  },
  computed: {
    answers () {
      return this.$store.state.answers
    },
      upvote () {
      let count = 0
      this.answers[0].questionId.votes.forEach( vote => {
        console.log(vote, '<><><><>')
        if (vote.value === 1) {
          count += Number(vote.value)
        }
      })
      return count
    },
    downvote () {
      let count = 0
      this.answers[0].questionId.votes.forEach( vote => {
        console.log(vote, '<><><><>')
        if (vote.value === -1) {
          count += Number(vote.value)
        }
      })
      return count
    }
  },
  methods: {
    vote (value, id) {
       let newVote = {
        value: value,
        id: id
      }
      this.$store.dispatch('voteQuestion', newVote)
        .then(({ data }) => {
          this.$store.dispatch('getDetails', this.$route.params.id)
                  
        })
        .catch(err => {
          console.log(err)
        })
    },
    postAnswer () {
      let id = this.$route.params.id
      this.$router.push(`/answer/${id}`)
    }
  }
}
</script>
