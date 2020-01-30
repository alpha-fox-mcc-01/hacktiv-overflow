<template>
  <div class="row my-4 border-bottom">
    <div class="col-2">
      <span class="pointer"
        :class="(votedByUser === 1) ? 'text-success' : 'text-secondary'"
        @click="voteAnswer(1, answer._id)"
      ><i class="fas fa-arrow-up lead"></i></span>
      <h2>{{ totalVotes }}</h2>
      <span class="pointer"
        :class="(votedByUser === -1) ? 'text-danger' : 'text-secondary'"
        @click="voteAnswer(-1, answer._id)"
      ><i class="fas fa-arrow-down lead"></i></span>
    </div>
    <div class="col-10">
      <h6 class="text-left text-secondary">By: {{ answer.authorId.name }}</h6>
      <h5 class="text-left">{{ answer.title }}</h5>
      <p class="lead text-left">{{ answer.content }}</p>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'Answer',
  props: {
    answer: Object,
  },
  computed: {
    totalVotes() {
      let total = 0;
      this.answer.votes.forEach((vote) => {
        total += vote.vote;
      });
      return total;
    },
    votedByUser() {
      if (this.answer.votes[0]) {
        if (this.answer.votes[0].userId !== '') {
          const result = this.answer.votes.filter(vote => vote.userId.toString() === localStorage.getItem('userId'));
          if (result.length > 0) {
            return result[0].vote;
          }
        }
      }
      return 0;
    },
  },
  methods: {
    voteAnswer(value, answerId) {
      this.$store.dispatch('voteAnswer', {
        value,
        answerId,
      })
        .then(() => {
          this.$store.dispatch('fetchOneQuestion', { questionId: this.$route.params.id });
          this.$store.dispatch('fetchAnswers', { questionId: this.$route.params.id });
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
};
</script>

<style scoped>
.pointer:hover {
  cursor: pointer;
}

</style>
