<template>
  <div>
    
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">title</label>
    <input  class="form-control" aria-describedby="emailHelp" v-model="que.title">
  </div>
  <!-- <label for="exampleInputEmail1">description</label> -->
  <!-- <p v-html="que.desc"></p> -->
  <div class="form-group">
    <label for="exampleInputEmail1">New Description</label>
    <tinymce id="d1" v-model="que.desc"></tinymce>
  </div>
  <!-- {{paragraf}}
  {{que.desc}} -->
  <button @click.prevent="updateQue(que._id)" type="submit" class="btn btn-primary mt-4" data-dismiss="modal">Update</button>
</form>

    <!-- janagan di looping, component satu dan kirim object oke siap -->
     <!-- <button class="btn btn-warning ml-2" data-toggle="modal" data-target="#ModalCenter" @click.prevent="">update</button>
  

  <div class="modal fade" id="ModalCenter" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Update Question </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">title</label>
    <input  class="form-control" aria-describedby="emailHelp" v-model="que.title">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Description</label>
    <tinymce id="d1" v-model="que.desc"></tinymce>
  </div>
  <button @click.prevent="updateQue(que._id)" type="submit" class="btn btn-primary mt-4" data-dismiss="modal">Update</button>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div> -->
  </div>

</template>

<script>
import axios from '../api/axiosInstance'
name: 'updateQuestion' 
export default {
  data (){
    return {
      paragraf: ''
    }
},
  props:{
    que: Object
  },
  methods:{
    closed(){
      console.log('keklik');
      
      this.$store.dispatch('getMyQuestions')
    },
    updateQue(id){
       axios({
      method: "put",
      url: `question/${id}`,
      data:{
          title: this.que.title,
          desc: this.paragraf
        },
      headers:{
        token: localStorage.getItem('token')
      }
    })
      .then(({ data }) => {
        console.log('sampe siniii', data);
        this.$store.commit('setonUpdate')
        this.$store.dispatch('getMyQuestions')
      })
      .catch(err => {
        
        console.log(err);
      });
    }
  },
  created: function () {
    if (this.que){
      this.paragraf = que.desc
    }
  }
}
</script>

<style>

</style>