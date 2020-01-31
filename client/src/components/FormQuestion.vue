<template>
  <div class="my-5">
    <h2>Add Question</h2>
    <form @submit.prevent="addQuestion">
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
      <button type="submit" class="btn btn-success">Add Question</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'FormQuestion',
  data() {
    return {
      title: '',
      content: '',
    };
  },
  methods: {
    addQuestion() {
      this.$store.dispatch('addQuestion', {
        title: this.title,
        content: this.content,
      })
        .then(() => {
          this.$router.push('/question');
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
