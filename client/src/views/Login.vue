<template>
  <div class="container my-5 my-lg-0">
    <div class="row">
      <div class="col-6 offset-3 offset-lg-0 col-lg-4 mb-2 mb-lg-0
        text-center text-lg-left align-self-center">
        <h1 class="welcome-heading">Welcome back</h1>
        <div class="alert alert-warning" role="alert" v-if='notification'>
          {{notification}}
        </div>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="harry@potter.com"
              v-model="user.email" required>
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="********"
              v-model="user.password" required>
          </div>
          <button type="submit" class="btn btn-dark">Sign In</button>
        </form>
        <p class="mt-3">Don't have an account?
          <span class="text-secondary span-hover"
          @click="changePage('/register')">Register here</span></p>
      </div>
      <div class="col-lg-8 align-self-center d-none d-lg-block">
        <img class="landing-img" src="../assets/login.jpg" alt="multitasking-guy">
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  computed: {
    notification() {
      return this.$store.state.notification;
    },
  },
  methods: {
    changePage(page) {
      this.$router.push(page);
    },
    login() {
      this.$store.dispatch('login', {
        email: this.user.email,
        password: this.user.password,
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('userName', data.name);
          this.$store.commit('SET_ISLOGIN', true);
          this.$router.push('/post');
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.errors}`,
          });
        });
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}

.span-hover {
  border-bottom: 1px solid white;
}

.span-hover:hover {
  cursor: pointer;
  color: #42b983 !important;
  border-bottom: 1px solid #42b983;
}

</style>
