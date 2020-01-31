<template>
  <div class="container">
    <div class="row">
      <div class="col-12 my-4">
        <h1 class="header-landing">We love people who code</h1>
      </div>
      <div class="col-lg-8 offset-lg-2">
        <img
          src="../assets/landing.jpg"
          alt="People sharing information image"
          class="landing-img"
        >
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12">
        <h2><strong class="header-landing">For developers, by developers</strong></h2>
      </div>
      <div class="col-lg-8 offset-lg-2">
        <p>Overflow is an open community for anyone that codes.
          We help you get answers to your toughest coding questions,
          share knowledge with your coworkers in private,
          and find your next dream job.
        </p>
      </div>
    </div>
    <div class="row my-4">
      <div class="col-md-4 p-3">
        <div class="card p-2 shadow">
          <div class="card-body">
            <h4 class="card-title header-landing">Public Q&A</h4>
            <p class="card-text">Get answers to more than
              10 questions and give back by
              sharing your knowledge with others.
              <span class="span-hover" @click="toRegister">Sign up</span> for an account.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 p-3">
        <div class="card p-2 shadow">
          <div class="card-body">
            <h4 class="card-title header-landing">Vote Question</h4>
            <p class="card-text">Level up with Overflow while you work.
              You can vote other questions so the other won't need to
              ask the same question again.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 p-3">
        <div class="card p-2 shadow">
          <div class="card-body">
            <h4 class="card-title header-landing">Quality Check</h4>
            <p class="card-text">We delete the bad post monthly.
              So you will only see the best post from the others.
              And you can be part of it by report the bad post.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    toRegister() {
      this.$router.push('/register');
    },
  },
};
</script>

<style scoped>
.header-landing {
  color: #42b983;
}

.landing-img {
  width: 100%;
}

.span-hover {
  color: #42b983;
}

.span-hover:hover {
  cursor: pointer;
}

.card {
  min-height: 14rem;
}
@media only screen and (max-width: 768px) {
  .card {
    min-height: 10rem;
  }
}
</style>
