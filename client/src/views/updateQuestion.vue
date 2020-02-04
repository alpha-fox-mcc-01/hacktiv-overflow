<template>
  <div class="container">
    <h1>update question</h1>
    <!-- {{theUrl}}
    {{que}} -->
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">title</label>
    <input  class="form-control" aria-describedby="emailHelp" v-model="title">
  </div>
  <!-- <label for="exampleInputEmail1">description</label>
  <p v-html="que.desc"></p> -->
  <div class="form-group">
    <label for="exampleInputEmail1">New Description</label>
    <tinymce id="d1" v-model="desc"></tinymce>
  </div>
  <!-- {{paragraf}}
  {{que.desc}} -->
  <button @click.prevent="updateQue(theUrl)" type="submit" class="btn btn-primary mt-4" data-dismiss="modal">Update</button>
</form>
    <router-view />

  </div>
</template>

<script>
import axios from '../api/axiosInstance'
export default {
  data () {
    return {
      title: '',
      desc: ''
    }
  },
  computed:{
    theUrl(){
      return this.$route.params.id
    }
  },
  props:{
    que: Object
  },
  methods:{
    getOne(){
       axios({
        method: "get",
        url: `/question/${this.$route.params.id}`,
        headers:{
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log(data);
          this.title = data.title
          this.desc = data.desc
          // this.getReactive()
          
        })
        .catch(err => {
          console.log(err);
        });
    },
      updateQue(id){
       axios({
      method: "put",
      url: `question/${id}`,
      data:{
          title: this.title,
          desc: this.desc
        },
      headers:{
        token: localStorage.getItem('token')
      }
    })
      .then(({ data }) => {
        console.log('sampe siniii', data);
        // this.$store.commit('setonUpdate')
        this.$store.dispatch('getMyQuestions')
        this.$store.dispatch('getQuestions')
        this.$router.push('/myQuestions')
      })
      .catch(err => {
        
        console.log(err);
      });
    }
  },
   created: function() {
    // console.log(this.$route.params);
    this.getOne()
  }
  
}
</script>

<style>

</style>