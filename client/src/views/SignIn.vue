<template>
<div class='container'>
  <center>
    <h1>Welcome Back.</h1><br />
  </center>
	<b-form @submit.prevent='signIn'>
		<b-form-group
			id="input-group-1"
			label="Email address:"
			label-for="input-1"
  		>
			<b-form-input
				id="input-1"
				v-model="email"
				type="email"
				required
				placeholder="Enter email"
			></b-form-input>
		</b-form-group>

		<b-form-group id="input-group-2" label="Password" label-for="input-2">
			<b-form-input
				type='password'
				id="input-2"
				v-model="password"
				required
				placeholder="Enter password"
			></b-form-input>
			<b-form-text id="password-help-block">
      By logging in you declare agreement to use our services responsibly
      </b-form-text>
		</b-form-group><hr>
		<center><b-button type="submit" variant="primary">Log In</b-button></center>
	</b-form>
</div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
	name: 'signIn',
	data () {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
	  signIn () {
			this.$store.dispatch('signIn', { email: this.email, password: this.password })
				.then(({data}) => {
					this.email = ''
					this.password = ''
					localStorage.setItem('access_token', `${data.access_token}`)
          Swal.fire('Success', 'Sign in Successful. Welcome Back!', 'success')
          this.$store.commit('SET_LOGIN', true)
					this.$router.push('/')
				})
				.catch(err => {
					Swal.fire('Error', `Sorry, something went wrong: ${err.message}`, 'error')
				})
	  },
	}
}
</script>

<style scoped>
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
