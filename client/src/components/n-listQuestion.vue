<template>
  <mdb-list-group>
    <mdb-list-group-item>
      <div style="width: 100%">
        <div class="d-flex justify-content-between">
          <router-link :to="`/question/${question._id}`">
            <h5 class="mb-2 h5">{{ question.title }}</h5>
          </router-link>
          <small>3 days ago</small>
        </div>
      </div>
    </mdb-list-group-item>
  </mdb-list-group>
</template>

<script>
import { mdbListGroup, mdbListGroupItem } from 'mdbvue'
export default {
  name: 'ListGroupPage',
  components: {
    mdbListGroup,
    mdbListGroupItem
  },
  props: ['question']
}
</script>
