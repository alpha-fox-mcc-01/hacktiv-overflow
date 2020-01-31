<template>
  <div style="width: 100%">
    <div class="d-flex justify-content-between">
      <h5 class="mb-2 ml-3" bold>{{ data.title }}</h5>
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
    <hr>
  </div>
</template>

<script>
import { mdbIcon } from 'mdbvue'
export default {
  name: 'details-answers',
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
