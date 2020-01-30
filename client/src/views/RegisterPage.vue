<template>
  <div class="container mt-5">
    <div class="row">
      <div class="text-center col-sm-5 d-flex flex-column align-items-center justify-content-center mb-5">
          <h4>Get unstuck - <small> find help</small></h4>
          <hr class="my-1">
          <h4>Upvote & Downvote and let them know</h4>
      </div>
      <div class="col-sm-7">
        <RegisterForm />
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm'
export default {
  components: {
    RegisterForm
  }
}
</script>

<style>

</style>
