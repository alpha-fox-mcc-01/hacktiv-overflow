<template>
 <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #2193b0;">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#" @click.prevent="toHome">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="toQue" v-if="checkLogin">Questions</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="toanswer" v-if="checkLogin">Answers</a>
      </li>
    </ul>
  </div>
  <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <button class="btn btn-primary" v-if="!checkLogin" @click.prevent="signIn">Sign in</button>
            </li>
            <li class="nav-item">
                <button class="btn btn-danger" @click.prevent="signOut" v-if="checkLogin">Sign Out</button>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
name: 'navbarHome'
export default {
computed:{
  checkLogin(){
    console.log(this.$store.state.onUpdate);
    
   return this.$store.state.onUpdate
  }
},
methods:{
  signIn(){
    console.log('masuk sini');

    this.$router.push('/loginPage')
  },
    signOut(){
    localStorage.removeItem('token')
    this.$store.commit('setonUpdate', false)
    this.$router.push('/')
  },
  toHome(){
    this.$router.push('/')
  },
  toQue(){
    this.$router.push('/myQuestions')
  },
  toanswer(){
    this.$router.push('/myAnswers')
  }
},
  // created: function(){
  //    if(localStorage.getItem('token')){
      
  //   }else{
  //     return false
  //   }

  // }
}
</script>

<style scoped>

* {
   font-family: "Courier New", Times, serif;
}
</style>