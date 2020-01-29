<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <!-- <a class="navbar-brand" href="#">Navbar</a> -->
  <img src="https://developer.android.com/guide/practices/ui_guidelines/images/NB_Icon_Mask_Shapes_Ext_02.gif" style="max-width: 50px"/>
  <h5 class="mt-2 mr-3"><strong>Hacktiv-git</strong></h5>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">My questions</a>
      </li>
    </ul>
      <button class="btn btn-outline-primary my-2 my-sm-0" v-if="!isLogin">Sign In</button>
      <button class="btn btn-outline-danger my-2 my-sm-0" v-if="isLogin">Sign Out</button>
  </div>
</nav>
</template>

<script>
export default {
   name : `Navbar`,
   data () {
      return {

      }
   },
   computed : {
      isLogin () {
         return this.$store.state.isLogin
      }
   }

}
</script>

<style scoped>

</style>