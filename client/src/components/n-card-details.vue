<template>
  <div style="width: 100%">
    <div class="d-flex justify-content-between">
      <h3 class="mb-2 ml-3" ><strong>{{ data.title }}</strong></h3>
      <hr />
      <small>{{ data.createdAt }}</small>
    </div>
    <blockquote class="blockquote mb-0">
      <div class="row ml-1">
        <div class="col-1">
          <div class="row"><mdb-icon class="vote" icon="angle-up" /></div>
          <div class="row">{{ data.votes.length }}</div>
          <div class="row"><mdb-icon class="vote" icon="angle-down" /></div>
        </div>
        <div class="col-11">
          <div v-html="data.description" style="text-align: justify"></div>
        </div>
      </div>
    </blockquote>
  </div>
</template>

<script>
import { mdbIcon } from 'mdbvue'
export default {
  name: 'n-card-details',
  components: {
    mdbIcon
  },
  props: ['data']
}
</script>

<style scoped>
  .vote {
    cursor: pointer;
  }
</style>
