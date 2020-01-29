<template>
  <b-modal id="RegisterModal" centered size="md" hide-header hide-footer>
    <b-button
      squared
      size="sm"
      style="position: absolute; right: 0rem; top: 0rem; z-index: 1"
      @click="$bvModal.hide('RegisterModal')"
      >Close</b-button
    >
    <b-row>
      <b-col>
        <b-img
          src="https://blocktribune.com/wp-content/uploads/2018/07/Square.jpg"
          fluid
        />
      </b-col>
      <b-col>
        <b-form style="padding-right: 15px">
          <b-row>
            <b-label for="username" style="width: 100%">Email</b-label>
            <b-input type="text" id="username" />
          </b-row>
          <b-row>
            <b-label for="email" style="width: 100%">Email</b-label>
            <b-input type="email" id="email" />
          </b-row>
          <b-row style="margin-top: 1rem">
            <b-label style="width: 100%">Password</b-label>
            <b-input type="password" id="password" />
          </b-row>
          <b-row style="margin-top: 2rem">
            <b-button style="width: 100%">LOGIN</b-button>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {};
</script>

<style></style>
