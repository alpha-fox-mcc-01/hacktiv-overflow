<template>
  <div class="my-5">
    <h2>Edit Question</h2>
    <form @submit.prevent="editQuestion">
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
      <button type="submit" class="btn btn-success">Edit Question</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'FormEdit',
  data() {
    return {
      title: '',
      content: '',
    };
  },
  methods: {
    fetchOneQuestion() {
      console.log(this.$store.state.questionDetail);
      this.$store.dispatch('fetchOneQuestion', { questionId: this.$route.params.id });
      this.title = this.$store.state.questionDetail.title;
      this.content = this.$store.state.questionDetail.content;
    },
    editQuestion() {
      this.$store.dispatch('editQuestion', {
        questionId: this.$route.params.id,
        title: this.title,
        content: this.content,
      })
        .then(() => {
          this.$store.dispatch('fetchUserQuestions');
          this.$router.push('/myquestion');
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
  },
};
</script>

<style>

</style>
