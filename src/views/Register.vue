<template>
    
<div id="app">
  <v-app>
    <v-container fluid pa-0>
        <div class="background-shapes-wrapper">
          <div class="background-shapes-container">
            <div class="background-shape circle-one"></div>
            <div class="background-shape circle-two"></div>
            <div class="background-shape square-one"></div>
            <div class="background-shape square-two"></div>
            <div class="background-shape square-three"></div>
            <div class="background-shape triangle-one"></div>
            <div class="background-shape triangle-two"></div>
            <div class="background-shape triangle-three"></div>
            <div class="background-shape rectangle-one"></div>
            <div class="background-shape rectangle-two"></div>
          </div>
        </div>
        <v-layout row wrap>
          <v-flex xs12 sm4 id="sign-in-text-wrapper" v-bind:class="{ switch: isSwitch }">
            <v-layout column align-center justify-center fill-height pa-3>
              <div class="login-wrapper text-xs-center mb-3 pa-5">
                <div class="display-1 font-weight-black mb-3" v-if="isSwitch">Hello, Nice to meet you!</div>
                <span class="subheading" v-if="isSwitch">
                    Write your personal details and Co-op with your team.
                   If you already have an account, click Login button.
                </span>
              </div>
            </v-layout>
          </v-flex>
          <v-flex xs12 sm8 id="sign-up-form-wrapper" class="active" v-bind:class="{ switch: isSwitch}">
            <v-layout column align-center justify-center pa-3 mt-5>
              <v-flex xs12 mb-3 mt-5>
                <div class="login-wrapper text-xs-center">
                  <div class="display-1 font-weight-black" v-if="isSwitch">Create Account</div>
                </div>
              </v-flex>
              <v-flex v-if="isSwitch" xs12 mb-2> <span class="grey--text text--lighten-1">or use your email for registration</span>
              </v-flex>
              <v-flex xs12 class="form-wrapper">
                <v-text-field v-if="isSwitch"
                  filled full-width single-line label="NickName" 
                  background-color="#f4f8f7"
                  color="grey darken-2"
                  prepend-inner-icon="mdi-account-outline"
                  mb-0
                ></v-text-field>
                <v-text-field v-if="isSwitch"
                filled full-width single-line label="Name"
                background-color="#f4f8f7"
                color="grey darken-2"
                prepend-inner-icon="mdi-account-outline"
                mb-0
                ></v-text-field>
                <v-text-field 
                filled full-width single-line label="Email"
                background-color="#f4f8f7"
                color="grey darken-2"
                prepend-inner-icon="mdi-email-outline"
                ></v-text-field>
                <v-text-field 
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  :type="show1 ? 'text' : 'password'" 
                  filled full-width single-line label="Password"
                  background-color="#f4f8f7"
                  color="grey darken-2"
                  prepend-inner-icon="mdi-lock-outline"
                  @click:append="show1 = !show1"></v-text-field>
              </v-flex>
              <v-btn rounded large dark ripple color="teal" id="sign-up" @click="goHome">Sign up</v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
  </v-app>
</div>

</template>

<script>

export default {
    data: () => ({
    show1: true,
    isSwitch: true,
    password: "Password"
    }),
    methods: {

      goHome() {
        this.$router.push({path : '/'})
      }
    }
    
}
</script>

<style src="@/static/style.css" scoped>
</style>