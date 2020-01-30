<template>
  <div class="card col-lg-8 offset-lg-2 p-0 my-2 shadow">
    <div class="card-header">
      Author: {{ question.authorId.name }}
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ question.title }}</h5>
      <p class="card-text">{{ question.content }}</p>
      <button
        class="btn-sm btn-success"
        @click="showDetail(question._id)"
      >See detail</button>
      <button
        class="btn-sm btn-warning ml-3"
        v-if="routeNow === '/myquestion'"
        @click="editQuestion(question._id)"
      >Edit</button>
      <button
        class="btn-sm btn-danger ml-3"
        v-if="routeNow === '/myquestion'"
        @click="deleteQuestion(question._id)"
      >Delete</button>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'CardQuestion',
  props: {
    question: Object,
  },
  computed: {
    routeNow() {
      return this.$route.path;
    },
  },
  methods: {
    showDetail(id) {
      this.$router.push(`/question/${id}`);
    },
    editQuestion(id) {
      this.$router.push(`/myquestion/${id}`);
    },
    deleteQuestion(id) {
      this.$store.dispatch('deleteQuestion', {
        questionId: id,
      })
        .then(() => {
          this.$store.dispatch('fetchUserQuestions');
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

<style>

</style>
