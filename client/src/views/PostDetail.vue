<template>
  <div class="my-5 container">
    <div class="d-flex align-self-center">
      <div class="mr-2 d-flex flex-column justify-content-center align-items-center text-center">
        <i class="fas fa-chevron-up fa-btn text-secondary"></i>
        <div class="card p-1 m-1">12</div>
        <i class="fas fa-chevron-down fa-btn text-secondary"></i>
      </div>

      <div class="">
        <h2>{{fetchedPost.title}}</h2>
        <p> posted by: {{postOwner.name}} | at: {{fetchedPost.createdAt}}</p>
      </div>
    </div>

    <hr class="my-3">

    <div class="mb-3" v-html="fetchedPost.content"></div>
    <div class="d-flex">
      <span class="mr-auto">Languages: <div class="badge badge-warning m-1" v-for="(lang,i) in fetchedPost.language" :key="i">{{lang}}</div> </span>
      <!-- owner's control -->
      <div v-if="(activeUser) && (postOwner._id === activeUser._id)">
        <i class="far fa-btn fa-edit mr-3"></i>
        <i class="far fa-btn text-danger fa-trash-alt"></i>
      </div>
    </div>

    <div class=""  >
      <div v-if="activeUser" class="d-flex flex-row-reverse">
        <a href="" @click.prevent="writeComment" class="">write a response</a>
      </div>
      <form v-if="isWritingComment" @submit.prevent="submitComment">
        <br>
        <div class="card">
          <div class="card-body">
            <h5>Comments: </h5>
            <Editor
              v-model="comment"
              :init="{
            height: 200,
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
            <br>
            <input type="submit" value="submit comment" class="btn btn-warning">
          </div>
        </div>
      </form>
    </div>

    <!-- MARKED AS SOLUTION -->
    <span>Solution:</span>
    <PostComment :comment="marked[0]"/>
    <hr class="my-3">
    <!-- COMMENT SECTION -->
    <PostComment v-for="comment in comments" :key="comment._id" :comment="comment"/>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import PostComment from '../components/PostComments'
import { mapState } from 'vuex'
export default {
  components: {
    PostComment,
    Editor
  },
  computed: {
    marked () {
      return this.comments.filter(row => row.markedAsAnswer)
    },
    ...mapState({
      activeUser: 'activeUser'
    })
  },
  data () {
    return {
      comment: '',
      isWritingComment: false,
      fetchedPost: {},
      postOwner: {},
      comments: []
    }
  },

  methods: {
    writeComment () {
      this.isWritingComment = !this.isWritingComment
    },
    submitComment () {
      const payload = {
        postId: this.fetchedPost._id,
        comment: this.comment
      }
      console.log('payload', payload)
      this.$store.dispatch('submitComment', payload)
        .then(({ data }) => {
          return this.$store.dispatch('getComment', this.fetchedPost._id)
        })
        .then(({ data }) => {
          this.comments = data.reverse()
          this.isWritingComment = false
          this.comment = ''
        })
        .catch(err => {
          throw err
        })
    }
  },

  created () {
    this.$store.dispatch('fetchOne', this.$route.params.postId)
      .then(({ data }) => {
        this.fetchedPost = data
        this.postOwner = data.owner
        return this.$store.dispatch('getComment', data._id)
      })
      .then(({ data }) => {
        console.log(data)
        this.comments = data.reverse()
      })
      .catch(err => {
        throw err
      })
  }

}
</script>

<style>
.tox-notifications-container{
  display: none;
}
.tox-statusbar {
  display: none
}
</style>
