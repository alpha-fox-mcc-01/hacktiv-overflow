<template>
  <div class='content'>
    <div class='col-md-9'>
      <div class='row'>
        <div class='col-md-1'>
          <b-card class='question-detail'>
            <h1 style='margin-top: 1.5rem; margin-left: 0.5rem;'>{{ questionReputation }}</h1>
          </b-card>
        </div>
        <div class='col-md-1'>
          <b-card class='question-detail'>
            <img src='../../public/arrow.png' width="40" height="40">
            <hr>
            <img src='../../public/arrow.png' style='transform: rotate(180deg)' width="40" height="40">
          </b-card>
        </div>
        <div class='col-md-10'>
          <b-card class='question-detail' :title="question.title" :sub-title="question.questionedBy.username">
            <b-card-text>
              {{ question.description }}
            </b-card-text>
            <b-button v-b-modal.modal-1>Reply</b-button>

            <b-modal id="modal-1" title="BootstrapVue" hide-footer>
                <b-form @submit.prevent="writeAnswer">
                  <b-form-group
                    id="input-group-1"
                    label="Title:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      type="text"
                      required
                      placeholder="Enter title"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label="Description" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      required
                      placeholder="Enter description"
                    ></b-form-input>
                  </b-form-group>
                  <b-button type="submit" variant="primary">Submit</b-button>
                </b-form>
            </b-modal>
          </b-card>
        </div>
      </div>
      <hr>
      <h1>Replies</h1>
      <br>
      <div class='row'>
        <div class='answers' v-for='answer in answers' :key='answer._id'>
          <div class='col-md-1'>
            <b-card class='question-detail'>
              <h1 style='margin-top: 1.5rem; margin-left: 0.5rem;'>2</h1>
            </b-card>
          </div>
          <div class='col-md-1'>
            <b-card class='question-detail'>
              <img src='../../public/arrow.png' width="40" height="40">
              <hr>
              <img src='../../public/arrow.png' style='transform: rotate(180deg)' width="40" height="40">
            </b-card>
          </div>
          <div class='col-md-10' v-if='answers.length > 0'>
            <b-card class='question-detail' v-for='answer in answers' :key='answer._id' :title="answer.title" :sub-title="answer.answeredBy.username">
              <b-card-text>
                {{ answer.description }}
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'questionDetail',
  computed: {
    question () {
      return this.$store.state.questionDetail
    },
    answers () {
      return this.$store.state.answers
    },
    questionReputation () {
      let vote = 0
      if (this.question.votes) {
        this.question.votes.forEach(vote => {
          vote += vote.value
        })
      }
      return vote
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
</style>
