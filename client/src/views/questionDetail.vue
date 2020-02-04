<template>
  <div class="container mt-5 text-left">
    <div class="qpart">
      <h2>{{OneQue.title}}</h2>
      <p>{{OneQue.createdAt}}</p>
      <hr />
      <div class="qBody row">
        <div class="col-1 icon text-center">
          <img src="@/assets/up.png" alt @click.prevent="upVote(OneQue._id, 1)" />
          <h4 class="mt-2">{{countVotes}}</h4>
          <img src="@/assets/down.png" alt @click.prevent="upVote(OneQue._id, -1)" />
        </div>
        <div class="col-11">
          <p><span v-html="OneQue.desc"></span> </p>
        </div>
      </div>
      <hr />
      <div class="qfooter mt-3 mb-5">
        <a href="#" class="badge badge-info mr-2">water</a>
        <a href="#" class="badge badge-info mr-2">earth</a>
        <a href="#" class="badge badge-info mr-2">fire</a>
        <a href="#" class="badge badge-info mr-2">air</a>
      </div>
    </div>

    <!-- <h5>{{getAnswers}}</h5> -->

    <h2>{{countAnswer}} Answers</h2>
    <hr />
    <postAnswer/>
    <answerCard v-for="answer in getAnswers" :key="answer._id" :answer="answer" />

    <router-view />
  </div>
</template>

<script>
import answerCard from "../components/answerCard";
import axios from '../api/axiosInstance'
import postAnswer from '../components/postAnswer'
export default {
  name: "questionDetail",
  data() {
    return {
      queNow: {},
      queVotes: [],
      answerNow: [],
    };
  },
  methods: {
    upVote(id, ct) {
      // console.log(localStorage.getItem('token'));
      console.log(typeof ct);
      
       axios({
        method: "post",
        url: `/question/votes/${id}`,
        data: {
          count: ct,
        },
        headers:{
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log(data);
          this.getReactive()
          
        })
        .catch(err => {
          console.log(err);
        });
    },
    downVote() {
      console.log("downVote");
    },
    seeDetail(id) {
      this.$router.push(`/question/${id}`);
      // this.$router.push(`/question/`)
    },
    getReactive(){
      this.$store.dispatch("getCurrentQue", this.$route.params.id);

      this.$store.dispatch("getCurrentAnswer", this.$route.params.id);
    }
  },
  computed: {
    getId() {
      return this.$route.params;
    },
    OneQue() {
      this.queNow = this.$store.state.currentQue;
      this.queVotes = this.queNow.votes;
      return this.queNow;
    },
    countVotes() {
      // console.log(this.queVotes, 'ini');
      if (this.queVotes) {
        // console.log(this.queVotes[0].count, 'ini votes');
        
        let sum =0
        for(let i = 0; i<=this.queVotes.length-1; i++){
          sum += this.queVotes[i].count
          console.log(this.queVotes[i].count, 'testo');
          
        }
        // console.log(sum, 'ini sumnya');
        
        return sum
      } else {
        return 0;
      }
    },
    countAnswer(){
       if (this.answerNow) {
        return this.answerNow.length;
      } else {
        return 0;
      }
    },
    getAnswers() {
      this.answerNow = this.$store.state.currentAnswer;
      return this.answerNow
    }
  },
  components: {
    answerCard,
    postAnswer
  },
  created: function() {
    // console.log(this.$route.params);

    this.$store.dispatch("getCurrentQue", this.$route.params.id);

    this.$store.dispatch("getCurrentAnswer", this.$route.params.id);
  }
};
</script>

<style scoped>
.container {
  width: 50rem;
}
.icon img {
  max-height: 2rem;
}
</style>