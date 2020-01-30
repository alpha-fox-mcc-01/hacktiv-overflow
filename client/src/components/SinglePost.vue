<template>
  <div
    style="justify-content: center; margin-bottom: 1rem;"
    @click="postDetail(currentPost._id)"
  >
    <!-- ISINYA -->
    <div>
      <b-row>
        <b-col cols="1" style="display: flex; justify-content: flex-end;">
          <b-card style="height: 100%;">
            <b-row style="justify-content: center;">{{ totalVoters }}</b-row>
            <b-row style="justify-content: center; font-size: 12px;"
              >votes</b-row
            >
            <b-row style="justify-content: center;">{{
              currentPost.answers.length
            }}</b-row>
            <b-row style="justify-content: center; font-size: 12px;"
              >answers</b-row
            >
          </b-card>
        </b-col>
        <b-col>
          <b-card :title="currentPost.title">
            <hr style="margin-bottom: 0;" />
            <b-row>
              <b-col cols="auto" class="mr-auto"> Asked: {{ getDate }}</b-col>
              <b-col cols="auto">{{ currentPost.UserId.email }}</b-col>
            </b-row>
            <hr style="margin-top: 0;" />
            <b-card-text style="text-align: left;">
              {{ getText }}
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <!-- ISINYA -->
  </div>
</template>

<script>
export default {
  props: {
    currentPost: Object
  },
  computed: {
    totalVoters() {
      return (
        this.currentPost.upvoters.length + this.currentPost.downvoters.length
      );
    },
    getText() {
      const str = this.currentPost.body.replace(/<[^>]+>/gm, " ");
      let processedStr = "";
      const strLength = str.length;
      if (strLength > 100) {
        for (let i = 0; i < 100; i++) {
          processedStr += str[i];
        }
        return (processedStr += "...");
      } else return str;
    },
    getDate() {
      const today = new Date();
      const postedDate = new Date(this.currentPost.created);
      let when;
      if ((today - postedDate) / 1000 <= 86400) {
        when = "Today";
      } else if (
        (today - postedDate) / 1000 > 86400 &&
        (today - postedDate) / 1000 <= 172800
      ) {
        when = "Yesterday";
      } else {
        const days = Math.floor((today - postedDate) / 86400);
        when = `${days} days ago`;
      }
      return `${when} | ${postedDate.toLocaleString("id-ID")}`;
    }
  },
  methods: {
    postDetail(id) {
      this.$router.push("/post/" + id);
    }
  }
};
</script>

<style scoped>
</style>
