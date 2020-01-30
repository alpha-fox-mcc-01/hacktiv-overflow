<template>
  <div class='row' style='margin-bottom: 2rem;'>
    <div class='col-md-1'>
      <b-card class='answer-detail'>
        <img class='upvote-arrow' @click='vote(1)' src='../../public/arrow.png' width="40" height="40">
        <hr>
        <img class='downvote-arrow' @click='vote(-1)' src='../../public/arrow.png' style='transform: rotate(180deg)' width="40" height="40">
      </b-card>
    </div>
    <div class='col-md-1'>
      <b-card class='answer-detail'>
        <h2 style='margin-top: 2rem; margin-left: 0.5rem;'>{{ reputation }}</h2>
      </b-card>
    </div>
    <div class='col-md-10'>
      <b-card class='answer-detail' :title='answer.title' :sub-title="answer.answeredBy.username">
        <b-card-text v-html='answer.description'>
          {{ answer.description }}
        </b-card-text>
        <b-card-text style='opacity: 0.6'>
          Last Edited: {{ answer.updatedAt }}
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'answerCard',
  data () {
    return {
      reputation: 0
    }
  },
  methods: {
    vote (value) {
      this.$store.dispatch('voteAnswer', {
        value,
        _id: this.answer._id
      })
        .then(() => {
          this.$emit('get-answers')
          this.getReputation()
        })
        .catch(err => {
          console.log(err)
        })
    },
    getReputation () {
      let value = 0
      if (this.answer.votes.length) {
        this.answer.votes.forEach(vote => {
          value += Number(vote.value)
        })
      }
      this.reputation = value
    }
  },
  props: {
    answer: Object
  }
}
</script>

<style scoped>
.upvote-arrow, .downvote-arrow {
  cursor: pointer;
}
.answer-detail {
  min-height: 10rem;
}
</style>
