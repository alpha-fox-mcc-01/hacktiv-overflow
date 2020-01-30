<template>
<div class='container'>
  <center>
    <h1>Welcome.</h1><br />
    <h6>Already have an account?<span @click='goToSignIn'>&nbsp;Sign In here</span></h6><br />
  </center>
	<b-form @submit.prevent="signUp">
    <b-form-group
			id="input-group-1"
			label="Username:"
			label-for="input-1"
  		>
			<b-form-input
				id="input-1"
				v-model="username"
				type="text"
				required
				placeholder="Enter username"
			></b-form-input>
		</b-form-group>

		<b-form-group
			id="input-group-2"
			label="Email address:"
			label-for="input-2"
			description="We'll never share your email with anyone else."
  		>
			<b-form-input
				id="input-2"
				v-model="email"
				type="email"
				required
				placeholder="Enter email"
			></b-form-input>
		</b-form-group>

		<b-form-group id="input-group-3" label="Password" label-for="input-3">
			<b-form-input
				type='password'
				id="input-3"
				v-model="password"
				required
				placeholder="Enter password"
			></b-form-input>
      <b-form-text id="password-help-block">
      Your password must be at least 6 characters long.
      </b-form-text>
		</b-form-group><hr>
		<center><b-button type="submit" variant="primary">Register</b-button></center>
	</b-form>
</div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
	name: 'register',
	data () {
		return {
			email: '',
      password: '',
      username: ''
		}
	},
	methods: {
	  signUp () {
      this.$store.dispatch('signUp', { email: this.email, username: this.username, password: this.password })
        .then(({ data }) => {
          this.email = ''
          this.password = ''
					Swal.fire('Success', 'Registration Successful. Welcome! You can log in now.', 'success')
          this.goToSignIn()
        })
        .catch(err => {
					Swal.fire('Error', `Sorry, something went wrong: ${err.message}`, 'error')
        })
	  },
		goToSignIn () {
      this.$router.push('/signin')
		}
	}
}
</script>

<style scoped>
span {
  opacity: 0.6;
  cursor: pointer;
}
span:hover {
  opacity: 1.4;
}
.container {
  width: 600px;
  height: 600px;

  position:absolute; /*it can be fixed too*/
  left:0; right:0;
  top:0; bottom:0;
  margin:auto;

  /*this to solve "the content will not be cut when the window is smaller than the content": */
  max-width:100%;
  max-height:100%;
  overflow:auto;
}
.btn-primary {
    color: #fff;
    background-color: rgb(132, 0, 255);
    border-color: rgb(132, 0, 255);
}
.btn-primary:hover{
  background-color: rgb(132, 0, 255);
  border-color: rgb(132, 0, 255);
  opacity: 0.7;
  transition: .7s ease;
}
</style>
