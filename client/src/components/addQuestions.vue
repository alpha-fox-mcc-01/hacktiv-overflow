<template>
   <div>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary mt-5" data-toggle="modal" data-target="#exampleModalCenter">
  Ask Question
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Ask Your Question</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Title</label>
    <input  class="form-control" aria-describedby="emailHelp" v-model="title">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Description</label>
    <tinymce id="d2" v-model="desc"></tinymce>
  </div>
  <button @click.prevent="addQue" type="submit" class="btn btn-primary mt-4" data-dismiss="modal">Submit</button>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import axios from '../api/axiosInstance'
export default {
name: 'addQuestions',
data () {
  return {
    title: '',
    desc: '',

  }
},methods:{
  addQue(){
    axios({
        method: "post",
        url: "/question/",
        data:{
          title: this.title,
          desc: this.desc
        },
        headers:{
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          this.title = '',
          this.desc = '',
        this.$store.dispatch('getMyQuestions')
         
        })
        .catch(err => {
         
          console.log(err);
        });
  } 
}
}
</script>

<style scoped>

</style>