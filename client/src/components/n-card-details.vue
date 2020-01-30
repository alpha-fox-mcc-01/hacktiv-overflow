<template>
  <mdb-list-group>
    <mdb-list-group-item>
      <div style="width: 100%">
        <div class="d-flex justify-content-between">
          <h5 class="mb-2">{{ data.title }}</h5>
          <small>{{ data.createdAt }}</small>
        </div>
        <div v-html="data.description"></div>
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
  props: ['data']
}
</script>
