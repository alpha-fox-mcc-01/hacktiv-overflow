<template>
  <div class="container my-5 my-lg-0">
    <div class="row">
      <div
        class="col-6 offset-3 offset-lg-0 col-lg-4 mb-2 mb-lg-0
        text-center text-lg-left align-self-center">
        <h1 class="welcome-heading">Join us here</h1>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Harry"
              v-model="user.name" required>
          </div>
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
          <button type="submit" class="btn btn-dark">Register</button>
        </form>
        <p class="mt-3">Already have an account?
          <span class="text-secondary span-hover"
            @click="changePage('/login')"
          >
            Sign In here
          </span>
        </p>
      </div>
      <div class="col-lg-8 align-self-center d-none d-lg-block">
        <img class="landing-img" src="../assets/register.jpg" alt="multitasking-guy">
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'Register',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    changePage(page) {
      this.$router.push(page);
    },
    register() {
      this.$store.dispatch('register', {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
      })
        .then(({ data }) => {
          this.$store.commit('SET_NOTIF', `Welcome ${data.name}`);
          setTimeout(() => {
            this.$store.commit('SET_NOTIF', '');
          }, 2500);
          this.$router.push('/login');
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
