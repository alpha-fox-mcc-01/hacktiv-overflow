<template>
  <div class="usercontainer">
    <b-card
      bg-variant="info"
      text-variant="white"
      header="Login"
      class="text-center"
    >
      <b-card-text>
        <b-form>
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
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
