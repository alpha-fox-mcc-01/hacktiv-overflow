<template>
  <div
    class="container mx-auto "
    style="width: 20rem; margin-top: 5rem;"
  >
    <h3>Register</h3>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="exampleInputPassword1">Name</label>
        <input
          class="form-control"
          placeholder="input name"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
        />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
    <p>
      
      <router-link to="loginPage">Sign in</router-link>

    </p>
  </div>
</template>

<script>
name: "registerPage";
import axios from "../api/axiosInstance";
export default {
  data() {
    return {
      email: "",
      password: "",
      name:''
    }
  },
  methods: {
    register() {
      axios({
        method: "post",
        url: "/user/register",
        data: {
          name: this.name,
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          console.log(data);

          this.name = ''
          this.email = ""
          this.password = ""
          localStorage.setItem('token', data.token)
          this.$store.commit('setonUpdate', true)

          this.$router.push('/')

        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  //  beforeRouteEnter (to, from, next) {
  //   // proses untuk dia udah login belom
  //   if (localStorage.getItem('access_token')) {
  //     next('/')
  //   } else {
  //     next()
  //   }
  // }
};
</script>

<style>
</style>