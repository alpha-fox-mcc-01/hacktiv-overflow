<template>
  <div class="">
    <NavigationBar />
    <Notification />
    <router-view />
</div>
</template>

<script>
import Notification from './components/Notification'
import NavigationBar from './components/NavigationBar'
export default {
  components: {
    NavigationBar,
    Notification
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.dispatch('fetchUserInfo', localStorage.getItem('access_token'))
        .then(() => {
          console.log('welcome back')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
/* font-family: 'Titillium Web', sans-serif;
font-family: 'Merriweather', serif; */

body{
  margin: 0px;
}
*{
  font-family: 'Titillium Web', sans-serif;
}
</style>
