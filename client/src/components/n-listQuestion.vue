<template>
  <mdb-list-group>
    <mdb-list-group-item>
      <div style="width: 100%">
        <div class="d-flex justify-content-between">
          <router-link to="/question/2">
            <h5 class="mb-2 h5">List group item heading</h5>
          </router-link>
          <small>3 days ago</small>
        </div>
      </div>
    </mdb-list-group-item>
    <mdb-list-group-item>
      <div>
        <div class="d-flex justify-content-between">
          <h5 class="mb-2 h5">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-2">
          Donec id elit non mi porta gravida at eget metus. Maecenas
          sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas
          sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas
          sed diam eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
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
  }
}
</script>
