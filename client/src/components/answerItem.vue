<template>
  <div class="mt-5 mb-4 text-left">
    <!-- {{answer}} -->
    <h4>{{answer.title}}</h4>
    <hr />
    <div class="qBody row ">
      <div class="col-1 icon text-center">
        <img src="@/assets/up.png" alt @click.prevent="upVote(answer._id, 1)" />
        <h4 class="mt-2">{{countVotes}}</h4>
        <img src="@/assets/down.png" alt @click.prevent="upVote(answer._id, -1)" />
      </div>
      <div class="col-11 ">
          <p><span v-html="answer.desc"></span> </p>

        
      </div>
    </div>
    <div class="">
      <h4>from question: </h4>
      <hr>
      <h5> {{answer.queId.title}}</h5>
      <h6 v-html="answer.queId.desc"></h6>
    </div>
    <div>
      <hr/>
      <span>answered at {{answer.createdAt}} by you</span>
    </div>
    <button class="btn btn-warning mr-2" @click.prevent="updateQue(answer._id)">Update</button>
  </div>
</template>

<script>
import axios from '../api/axiosInstance'
export default {
  name: "answerItem",
  props: {
    answer: {}
  },
  methods: {
    upVote(id, ct) {

       axios({
        method: "post",
        url: `/answer/votes/${id}`,
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
     updateQue(id){
      this.$router.push(`/updateAnswer/${id}`)
     
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
    countVotes() {
      if (this.answer.votes) {
        let sum =0
        for(let i = 0; i<=this.answer.votes.length-1; i++){
          sum += this.answer.votes[i].count
        }
        return sum
      } else {
        return 0;
      }
    }
  }
};
</script>

<style scoped>
.icon img {
  max-height: 2rem;
}
</style>