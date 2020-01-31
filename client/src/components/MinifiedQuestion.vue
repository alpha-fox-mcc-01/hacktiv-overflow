<template>
  <div class='content'>
    <div class='row'>
      <h5 @click='viewDetail(question._id)'><strong>{{ question.title }}</strong></h5>
    </div>
    <div class='row'>
      <p>{{ question.questionedBy.username }} | {{ question.createdAt }} | <span class='delete-h6' @click="deleteQuestion(question._id)" >Delete</span></p>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'minified-question',
  props: {
    question: Object,
    isUser: Boolean
  },
  methods: {
    viewDetail (id) {
      this.$router.push(`/discover/${id}`)
    },
    deleteQuestion (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Question will be deleted permanently!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel'
      })
        .then((result) => {
        if (result.value) {
          this.$store.dispatch('deleteQuestion', id)
            .then(() => {
              Swal.fire('Success', 'Post deleted', 'success')
              this.$store.dispatch('getQuestions')
              this.$store.dispatch('getUserQuestions')
            })
            .catch(err => {
              Swal.fire('Error', `Sorry, something went wrong : ${err.message}`, 'error')
            })
        }
      })
    }
  }
}
</script>

<style>
.delete-h6 {
  color: red;
  cursor: pointer;
}
h5 {
  cursor: pointer;
}
.content {
  margin-bottom: 0.5rem;
}
</style>
