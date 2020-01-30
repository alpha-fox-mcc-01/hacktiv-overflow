<template>
  <div class="max-w rounded overflow-hidden shadow-lg my-2">
  <div class="font-bold text-xl mb-2">{{answer.title}}</div>
    <p v-html="answer.content" class="text-grey-darker text-base">{{answer.content}}
    </p>
    <div class="px-6 py-4">
        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">answered {{answer.created_at.slice(0,10)}} by {{answer.author.username}}</span>
    </div>
    <div class="inline-flex">
    <button @click="vote(-1, answer._id)" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
     <p class="text-xs ...">{{downvote}}</p>
     <i style="font-size:24px" class="fa">&#xf088;</i>
    </button>
    <button @click="vote(1, answer._id)" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
      <p class="text-xs ...">{{upvote}}</p>
      <i style="font-size:24px" class="fa">&#xf087;</i>
    </button>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AnswerCard',
  props: ['answer'],
  computed: {
    upvote () {
      let count = 0
      this.answer.votes.forEach( vote => {
        console.log(vote, '<><><><>')
        if (vote.value === 1) {
          count += Number(vote.value)
        }
      })
      return count
    },
    downvote () {
      let count = 0
      this.answer.votes.forEach( vote => {
        console.log(vote, '<><><><>')
        if (vote.value === -1) {
          count += Number(vote.value)
        }
      })
      return count
    }
  },
  methods: {
    vote (value, id) {
      let newVote = {
        value: value,
        id: id
      }
      this.$store.dispatch('voteAnswer', newVote)
        .then(({ data }) => {
          this.$store.dispatch('getDetails', this.$route.params.id)
                  
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>