<template>
  <b-modal id="LoginModal" centered size="md" hide-header hide-footer>
    <b-button
      class="myButton"
      squared
      size="sm"
      style="position: absolute; right: 0rem; top: 0rem; z-index: 1; border: none;"
      @click="$bvModal.hide('LoginModal')"
      >Close</b-button
    >
    <b-row>
      <b-col>
        <b-img
          src="https://s3-ap-southeast-1.amazonaws.com/assets.muhammadsatriaadiputra.digital/assets/Fire.png"
          fluid
        />
      </b-col>
      <b-col>
        <b-form style="padding-right: 15px">
          <b-row>
            <b-label for="email" style="width: 100%">Email</b-label>
            <b-input type="email" id="email" />
          </b-row>
          <b-row class="margintop1">
            <b-label style="width: 100%">Password</b-label>
            <b-input type="password" id="password" />
          </b-row>
          <b-row class="margintop2">
            <b-button style="width: 100%" class="myButton">LOGIN</b-button>
            <p style="font-size: 12px; margin-bottom: 0">
              <span id="donthave">Don't have an account? </span>
              <span id="here">Register here.</span>
            </p>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {};
</script>

<style>
.margintop1,
.margintop2 {
  margin: 12px;
  border: none;
}

@media screen and (max-width: 600px) {
  .margintop1,
  .margintop2 {
    margin: 10px;
    border: none;
  }
}

@media screen and (max-width: 480px) {
  #donthave {
    display: none;
  }

  #here {
    text-align: end;
    width: 100%;
    font-size: 14px;
  }
}
</style>
