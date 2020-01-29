<template>
  <div style="justify-content: center;">
    <div>
      <!-- <b-card title="Ask Question"> -->
      <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
        style="height: 500px"
      ></ckeditor>
      <b-card>Attachment</b-card>
      <b-button class="submitPost">SUBMIT</b-button>
      <!-- </b-card> -->
      <div v-html="editorData"></div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
          "imageUpload",
          "blockQuote",
          "undo",
          "redo"
        ]
      }
    };
  }
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