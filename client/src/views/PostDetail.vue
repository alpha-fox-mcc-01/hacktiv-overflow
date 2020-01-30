<template>
  <div style="justify-content: center;">
    <!-- ISINYA -->
    <div>
      <b-card class="contentCard" :title="post.title">
        <hr style="margin-bottom: 0;" />
        <b-row>
          <b-col cols="auto" class="mr-auto"> Asked: {{ getDate }}</b-col>
          <b-col cols="auto">{{ post.UserId.email }}</b-col>
        </b-row>
        <hr style="margin-top: 0;" />
        <div
          v-html="post.body"
          style="margin-bottom: 0; text-align: left;"
        ></div>
        <div style="width: 100%; justify-items: center;">
          <b-img
            v-if="post.imageUrl"
            style="max-width: 50%; margin-top: 1rem;"
            :src="post.imageUrl"
            fluid
          ></b-img>
        </div>
      </b-card>
      <b-card class="contentCard" style="margin-top: 0; font-size: 1.5rem;">
        <a @click="addVote('upvote')" class="voteButton">
          <i class="fas fa-chevron-circle-up"></i>
        </a>
        <span style="margin: 0 1.25rem">{{ getTotalVote }}</span>
        <a @click="addVote('downvote')" class="voteButton">
          <i class="fas fa-chevron-circle-down"></i>
        </a>
        <b-button
          size="sm"
          style="position: absolute; right: 1rem;"
          @click="deletePost"
          >Delete</b-button
        >
      </b-card>
      <!-- <p>{{ post.answers }}</p> -->
      <!-- <Answer /> -->
      <Answer
        v-for="answer in post.answers"
        :key="answer._id"
        :answer="answer"
      />
      <div class="addAnswer">
        <div v-if="this.activeUserId">
          <ckeditor
            :editor="editor"
            v-model="editorData"
            :config="editorConfig"
            style="height: 500px;"
          ></ckeditor>
          <b-button class="submitPost myButton" @click.prevent="addReply"
            >SUBMIT</b-button
          >
        </div>
      </div>
    </div>
    <!-- ISINYA -->
  </div>
</template>

<script>
import Answer from "@/components/Answer.vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { mapState } from "vuex";

export default {
  name: "postdetail",
  components: {
    Answer
  },
  data() {
    return {
      post: "",
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
      }
    };
  },
  methods: {
    fetchThisPost() {
      this.$store
        .dispatch("fetchOneQuestion", this.$route.params.id)
        .then(({ data }) => {
          console.log(data);
          this.post = data;
        })
        .catch(err => console.log(err));
    },

    addReply() {
      this.$store
        .dispatch("addReply", {
          body: this.editorData,
          UserId: this.activeUserId,
          PostId: this.$route.params.id
        })
        .then(({ data }) => {
          console.log(data);
          this.addAnswer(data._id);
          this.editorData = "";
          this.$router.go();
        })
        .catch(err => console.log(err));
    },

    addAnswer(answerId) {
      this.$store.dispatch("addAnswer", {
        postId: this.$route.params.id,
        answerId
      });
    },

    addVote(type) {
      this.$store
        .dispatch("addVote", {
          postId: this.$route.params.id,
          votersId: this.activeUserId,
          type
        })
        .then(success => {
          this.$router.go();
        })
        .catch(err => console.log(err));
    },

    deletePost() {
      this.$store
        .dispatch("deletePost", this.$route.params.id)
        .then(success => {
          this.$router.push("/home");
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    this.fetchThisPost();
  },
  computed: {
    ...mapState(["activeUserId"]),
    getDate() {
      const today = new Date();
      const postedDate = new Date(this.post.created);
      let when;
      if ((today - postedDate) / 1000 <= 86400) {
        when = "Today";
      } else if (
        (today - postedDate) / 1000 > 86400 &&
        (today - postedDate) / 1000 <= 172800
      ) {
        when = "Yesterday";
      } else {
        const days = Math.floor((today - postedDate) / 86400000);
        when = `${days} days ago`;
      }
      return `${when} | ${postedDate.toLocaleString("id-ID")}`;
    },
    getTotalVote() {
      let counter = 0;
      counter =
        counter + this.post.upvoters.length - this.post.downvoters.length;
      return counter;
    }
  }
};
</script>
<style scoped>
.contentCard {
  margin: 20px 50px 0px 50px;
  /* height: 85vh; */
  overflow: auto;
}

.submitPost {
  width: 20%;
  margin-top: 20px;
}

.addAnswer {
  margin: 20px 50px;
}

.voteButton:hover {
  color: coral;
}

.voteButton:active {
  color: red;
}

@media screen and (max-width: 800px) {
  .submitPost {
    width: 60%;
  }
}

@media screen and (max-width: 600px) {
  .contentCard {
    margin: 0;
    border: none;
  }

  .submitPost {
    width: 100%;
  }

  .addAnswer {
    margin: 20px 10px;
  }
}
</style>
