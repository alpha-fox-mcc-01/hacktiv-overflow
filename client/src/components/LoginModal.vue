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
            <label for="email" style="width: 100%">Email</label>
            <b-input type="email" id="email" v-model="email" />
          </b-row>
          <b-row class="margintop1">
            <label for="password" style="width: 100%">Password</label>
            <b-input type="password" id="password" v-model="password" />
          </b-row>
          <b-row class="margintop2">
            <b-button
              style="width: 100%"
              class="myButton"
              v-if="!this.isreg"
              @click="login"
              >LOGIN</b-button
            >
            <b-button
              style="width: 100%"
              class="myButton"
              v-if="this.isreg"
              @click="register"
              >REGISTER</b-button
            >
            <p style="font-size: 12px; margin-bottom: 0" v-if="!this.isreg">
              <span id="donthave">Don't have an account? </span>
              <span
                style="color: blue; font-weight: bold;"
                id="here"
                @click="emitProp(true)"
                >Register here.</span
              >
            </p>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {
  props: {
    isreg: Boolean
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    emitProp(value) {
      this.$emit("change-prop", value);
    },
    login() {
      this.$store
        .dispatch("loginUser", {
          email: this.email,
          password: this.password
        })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.token);
          localStorage.setItem("activeUserId", data._id);
          this.$store.commit("SET_USER_CREDENTIALS", {
            token: data.token,
            activeUserId: data._id
          });
          this.$bvModal.hide("LoginModal");
        })
        .catch(err => console.log(err));
    },
    register() {
      this.$store
        .dispatch("registerUser", {
          email: this.email,
          password: this.password
        })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.token);
          localStorage.setItem("activeUserId", data._id);
          this.$store.commit("SET_USER_CREDENTIALS", {
            token: data.token,
            activeUserId: data._id
          });
          this.$bvModal.hide("LoginModal");
        })
        .catch(err => console.log(err));
    }
  }
};
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
