<template>
     <div class="card text-left mt-5">
  <div class="card-header">
    Question 
  </div>
  <div class="card-body row" >
    <div class="col-1 icon">
    <img src="@/assets/up.png" alt="" @click.prevent="upVote">
    <img src="@/assets/down.png" alt="" @click.prevent="downVote">
    </div>
    <div class="col-11">
      <!-- {{ this.$route.params }} -->
      <blockquote class="blockquote mb-0">
      <p>{{que.title}}</p>
      <footer class="blockquote-footer">{{que.createdAt}}</footer>
    </blockquote>
    </div>
  </div>
   <div class="card-footer text-muted row" style="">
    <!-- <span class="badge badge-pill badge-info">info</span> -->
   <button class="btn btn-danger mr-2" @click.prevent="deleteOne(que._id)">Delete</button>
    <button class="btn btn-warning mr-2" @click.prevent="updateQue(que._id)">Update</button>
     <!-- <button class="btn btn-warning mr-2" v-if="onUpdate" @click.prevent="updateQue(que._id)">close</button> -->
    
  </div>
    <!-- <updateQuestion v-if="onUpdate" :que="que"/> -->

  <router-view :que="que"/>
  
</div>
</template>

<script>
import axios from '../api/axiosInstance'
import updateQuestion from '../components/updateQuestion'
export default {
name: 'listQuestions',
data(){
  return {
    updateque: false
  }
},
  props:{
    que: Object
  },
  components:{
    updateQuestion
  },
  computed:{
    onUpdate(){
      return this.$store.state.onUpdate
    }
  },
  methods:{
    deleteOne(id){
      axios({
      method: "delete",
      url: `/question/${id}`,
      headers:{
        token: localStorage.getItem('token')
      }
    })
      .then(({ data }) => {
        console.log('sampe siniii', data);
        this.$store.dispatch('getMyQuestions')
      })
      .catch(err => {
        res.send(err)
        console.log(err);
      });
    },
    updateQue(id){
      this.$router.push(`/updateQuestion/${id}`)
     
    }
  }
}
</script>

<style scoped>
.icon img{
  max-height: 2rem
}
</style>