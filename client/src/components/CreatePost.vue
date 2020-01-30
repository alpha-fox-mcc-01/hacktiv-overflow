<template>
  <div style="justify-content: center;">
    <div>
      <!-- <b-card title="Ask Question"> -->
      <b-row>
        <b-col cols="8" style="padding-right: 0;"
          ><b-input type="text" placeholder="Title" v-model="title"
        /></b-col>
        <b-col cols="4" style="padding-left: 0;">
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-col>
      </b-row>
      <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
        style="height: 500px"
      ></ckeditor>
      <b-form-file
        v-model="imageUrl"
        :state="Boolean(imageUrl)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
      <b-button class="submitPost myButton" @click="addNewPost"
        >SUBMIT</b-button
      >
      <!-- </b-card> -->
      <div v-html="editorData"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

export default {
  name: "newpost",
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "link",
          "bulletedList",
          "numberedList",
          "blockQuote",
          "undo",
          "redo"
        ]
      },
      imageUrl: [],
      title: "",
      selected: "backend",
      options: [
        { value: "frontend", text: "Front-End" },
        { value: "backend", text: "Back-End" }
      ]
    };
  },
  methods: {
    addNewPost() {
      if (this.imageUrl.length !== 0) {
        let formData = new FormData();
        formData.append("title", this.title);
        formData.append("body", this.editorData);
        formData.append("category", this.selected);
        formData.append("UserId", this.activeUserId);
        formData.append("imageUrl", this.imageUrl);

        this.$store
          .dispatch("addPost", formData)
          .then(({ data }) => {
            console.log(data);
            this.title = "";
            this.editorData = "";
            this.imageUrl = [];
            this.$router.push("/post/" + data._id);
          })
          .catch(err => console.log(err));
      } else {
        this.$store
          .dispatch("addPostWithoutPic", {
            title: this.title,
            body: this.editorData,
            category: this.selected,
            UserId: this.activeUserId
          })
          .then(({ data }) => {
            console.log(data);
            this.title = "";
            this.editorData = "";
            this.imageUrl = [];
            this.$router.push("/post/" + data._id);
          })
          .catch(err => console.log(err));
      }
    }
  },
  computed: mapState(["activeUserId"])
};
</script>

<style scoped>
.submitPost {
  width: 20%;
  margin-top: 20px;
}

@media screen and (max-width: 800px) {
  .submitPost {
    width: 60%;
  }
}

@media screen and (max-width: 600px) {
  .submitPost {
    width: 100%;
  }
}
</style>