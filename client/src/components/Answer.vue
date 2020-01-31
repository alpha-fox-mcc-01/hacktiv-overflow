<template>
  <div style="justify-content: center;">
    <!-- ISINYA -->
    <div>
      <b-card class="contentCard">
        <b-row>
          <b-col cols="auto" class="mr-auto"> Replied: {{ getDate }}</b-col>
          <b-col cols="auto">{{ this.email }}</b-col>
        </b-row>
        <hr />
        <p v-html="answer.body"></p>
      </b-card>
    </div>
    <!-- ISINYA -->
  </div>
</template>

<script>
export default {
  name: "answer",
  props: {
    answer: Object
  },
  data() {
    return {
      email: ""
    };
  },
  methods: {
    getUser() {
      this.$store
        .dispatch("findOneUser", this.answer.UserId)
        .then(({ data }) => {
          this.email = data.email;
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    this.getUser();
  },
  computed: {
    getDate() {
      const today = new Date();
      const postedDate = new Date(this.answer.created);
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
  }
};
</script>
<style scoped>
.contentCard {
  margin: 20px 50px;
  /* height: 85vh; */
  overflow: auto;
}

@media screen and (max-width: 600px) {
  .contentCard {
    margin: 0;
    border: none;
  }
}
</style>
