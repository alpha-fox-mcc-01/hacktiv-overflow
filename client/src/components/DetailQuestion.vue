<template>
  <div class="container">
    <h1>{{ question.title }}</h1>
    <p class="text-secondary">Ask by: {{ authorName }}</p>
    <hr />
    <div class="row">
      <div class="col-2">
        <span class="pointer"
         :class="(votedByUser === 1) ? 'text-success' : 'text-secondary'"
         @click="voteQuestion(1)"
        ><i class="fas fa-arrow-up lead"></i></span>
        <h2>{{ totalVotes }}</h2>
        <span class="pointer"
          :class="(votedByUser === -1) ? 'text-danger' : 'text-secondary'"
          @click="voteQuestion(-1)"
        ><i class="fas fa-arrow-down lead"></i></span>
      </div>
      <div class="col-10">
        <h5 class="text-left">Question</h5>
        <p class="lead text-left">{{ question.content }}</p>
      </div>
    </div>
    <hr />
    <h3>{{ answers.length }} Answers</h3>
    <form @submit.prevent="addAnswer">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title"
          v-model="title"
        >
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <input type="text" class="form-control" id="content" placeholder="Content"
          v-model="content"
        >
      </div>
      <button type="submit" class="btn btn-success">Add Answer</button>
    </form>
    <hr />
    <Answer
      v-for="answer in answers" :key="answer._id"
      :answer="answer"
    />
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import Answer from './Answer.vue';

export default {
  name: 'DetailQuestion',
  data() {
    return {
      title: '',
      content: '',
    };
  },
  computed: {
    question() {
      return this.$store.state.questionDetail;
    },
    answers() {
      return this.$store.state.questionAnswers;
    },
    authorName() {
      if (this.question.authorId) {
        return this.question.authorId.name;
      }
      return '';
    },
    totalVotes() {
      if (this.question.votes) {
        let total = 0;
        this.question.votes.forEach((vote) => {
          total += vote.vote;
        });
        return total;
      }
      return 0;
    },
    votedByUser() {
      if (this.question.votes) {
        if (this.question.votes[0]) {
          if (this.question.votes[0].userId !== '') {
            const result = this.question.votes.filter(vote => vote.userId.toString() === localStorage.getItem('userId'));
            if (result.length > 0) {
              return result[0].vote;
            }
          }
        }
      }
      return 0;
    },
  },
  components: {
    Answer,
  },
  methods: {
    fetchOneQuestion() {
      this.$store.dispatch('fetchOneQuestion', { questionId: this.$route.params.id });
    },
    fetchAnswers() {
      this.$store.dispatch('fetchAnswers', { questionId: this.$route.params.id });
    },
    voteQuestion(value) {
      this.$store.dispatch('voteQuestion', {
        value,
        questionId: this.$route.params.id,
      })
        .then(() => {
          this.fetchOneQuestion();
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.errors}`,
            footer: '<a href>Why do I have this issue?</a>',
          });
        });
    },
    addAnswer() {
      this.$store.dispatch('addAnswer', {
        title: this.title,
        content: this.content,
        questionId: this.$route.params.id,
      })
        .then(() => {
          this.fetchAnswers();
          this.title = '';
          this.content = '';
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.errors}`,
            footer: '<a href>Why do I have this issue?</a>',
          });
        });
    },
  },
  created() {
    this.fetchOneQuestion();
    this.fetchAnswers();
  },
};
</script>

<style scoped>
.pointer:hover {
  cursor: pointer;
}

</style>
