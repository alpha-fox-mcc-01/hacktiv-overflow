<template>
  <mdb-list-group>
    <mdb-list-group-item>
      <div style="width: 100%">
        <div class="row">
          <div class="col-sm-2">
            <div>Vote {{ question.votes.length }}</div>
            <div>Answer 2</div>
          </div>
          <div class="col-sm-10">
            <div class="d-flex justify-content-between">
              <router-link :to="`/question/${question._id}`">
                <h5 class="mb-2 h5">{{ question.title }}</h5>
              </router-link>
              <small>3 days ago</small>
            </div>
            <div class="d-flex justify-content-between">
              <div style="text-align: left;">by {{ questionOwner }}</div>
              <div v-if="currentUserId == question.ownerId">
                <small @click="updateQue" style="cursor: pointer;">Update</small>
                <span>  |  </span>
                <small @click="deleteQue" style="cursor: pointer;">Delete</small>
              </div>
            </div>
          </div>
      </div>
     </div>
    </mdb-list-group-item>
  </mdb-list-group>
</template>

<script>
import { mdbListGroup, mdbListGroupItem } from 'mdbvue'
import axios from 'axios'
export default {
  name: 'n-list-question',
  data () {
    return {
      questionOwner: ''
    }
  },
  components: {
    mdbListGroup,
    mdbListGroupItem
  },
  props: ['question'],
  methods: {
    findOwnerName () {
      axios({
        method: 'get',
        url: 'http://api-hacktiv-overflow.nafies.tech/user/' + this.question.ownerId
      })
        .then(({ data }) => {
          this.questionOwner = data.name
        })
        .catch(err => {
          console.log(err)
        })
    }
    // updateQue () {
    //   console.log('update que')
    // },
    // deleteQue () {
    //   console.log('delete que')
    // }
  },
  computed: {
    currentUserId () {
      return this.$store.state.currentUserId
    }
  },
  created () {
    this.findOwnerName()
  }
}
</script>
