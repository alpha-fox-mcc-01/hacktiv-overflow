<template>
  <div class="card col-lg-6 flex px-0">
    <div class="card-body d-flex align-items-center ">
      <div class="mr-2 d-flex flex-column justify-content-center align-items-center text-center">
        <i class="fas fa-chevron-up fa-btn text-secondary"></i>
        <div class="card p-1 m-1">12</div>
        <i class="fas fa-chevron-down fa-btn text-secondary"></i>
      </div>

      <div class="ml-2 d-flex flex-column flex-grow-1">
        <router-link :to="'post/'+post._id">
          <div class="row-title fa-btn" href="">{{post.title}}</div>
        </router-link>
        <div class="d-flex align-items-center">
        </div>
        <div class="mt-2">
          <span><i v-if="post.isResolved" class="ml-1 fas fa-check text-success"></i> </span>
          <span class="ml-4 ">Posted at: {{post.createdAt}}</span>
        </div>
        <span class="">Languages: <div class="badge badge-warning m-1" v-for="(lang,i) in post.language" :key="i">{{lang}}</div> </span>
      </div>

      <div class="d-flex flex-column" v-if="(activeUser) && (activeUser._id == post.owner)">
        <i @click="edit" v-if="!post.isResolved" class="far fa-btn fa-edit mb-2 text-dark"></i>
        <i @click="deletePost" class="far fa-btn text-danger fa-trash-alt"></i>
      </div>
    </div>
    <!-- EDIT FORM -->
    <div v-if="isEditing" class="card-body">
      <hr class="my-2">
        <form @submit.prevent="submitEdit">
          <div class="form-group">
            <label>Title :</label>
            <input v-model="title" type="text" class="form-control">
          </div>

          <div class="form-group">
            <Editor
              v-model="content"
              :init="{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help'}"
            >
            </Editor>

          </div>

          <div class="form-group">
            <label>Language : </label>
            <input v-model="language" type="text" class="form-control">
            <small>separated by comma</small>
          </div>
          <input type="submit" value="Submit" class="btn btn-warning btn-lg btn-block col-3">
        </form>
    </div>
    <!-- DELETE CONFIRMATION -->
    <div v-if="isDeleting" class="card-body d-flex flex-row-reverse">
      <span @click="submitDeletePost" class="text-danger fa-btn ml-2"><u>yes</u></span>
      <span @click="deletePost" class="ml-2 fa-btn">no</span>
      <div class="">are you sure to delete this Post?</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Editor from '@tinymce/tinymce-vue'
export default {
  props: ['post'],
  components: {
    Editor
  },
  computed: mapState({
    activeUser: 'activeUser'
  }),
  data () {
    return {
      isEditing: false,
      isDeleting: false,
      langString: this.post.language.join(', '),
      language: '',
      title: this.post.title,
      content: this.post.content
    }
  },
  methods: {
    edit () {
      this.isEditing = !this.isEditing
    },
    submitEdit () {
      const payload = {
        postId: this.post._id,
        title: this.title,
        content: this.content,
        language: this.language
      }
      console.log(payload)
      this.$store.dispatch('submitEditPost', payload)
        .then(({ data }) => {
          return this.$store.dispatch('fetchMyPost')
        })
        .then(({ data }) => {
          console.log(data, 'ini hasil dispatch fetchmypost')
          this.$store.commit('MAP_POSTS', data)
          this.edit()
        })
        .catch(err => {
          console.log(err)
        })
    },
    deletePost () {
      this.isDeleting = !this.isDeleting
    },
    submitDeletePost () {
      this.$store.dispatch('deletePost', this.post._id)
        .then(({ data }) => {
          return this.$store.dispatch('fetchMyPost')
        })
        .then(({ data }) => {
          console.log(data, 'ini hasil dispatch fetchmypost')
          this.$store.commit('MAP_POSTS', data)
          this.edit()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.row-title {
  font-size: 1.2em;
  text-decoration: none;
  color: black;
}
.tox-notifications-container{
  display: none;
}
.tox-statusbar {
  display: none
}
</style>
