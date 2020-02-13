<template>
    
<div id="app">
  <v-app>
      <v-container fluid pa-0>
        <v-layout row wrap>
          <v-flex xs12 sm4 id="sign-in-text-wrapper">
            <v-layout column align-center justify-center fill-height pa-3>
              <div class="login-wrapper text-xs-center mb-3 pa-5">
                <div class="display-1 font-weight-black mb-3">Welcome Back!</div>
                <span class="subheading">
                  please login with your account!
                  If you don't have account, please click Sign Up button.
                </span>
              </div>
              <v-btn rounded outlined large dark ripple to="/register">Sign Up</v-btn>
            </v-layout>
          </v-flex>
          <v-flex xs12 sm8 id="sign-up-form-wrapper" class="active">
            <v-layout column align-center justify-center pa-3 mt-5>
              <v-flex xs12 mb-3 mt-5>
                <div class="login-wrapper text-xs-center">
                  <div class="display-1 font-weight-black">로그인</div>
                </div>
              </v-flex>
              <v-flex xs12 class="form-wrapper">
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
              <v-btn rounded large dark ripple color="teal" id="sign-up" @click="goHome">Log in</v-btn>
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
    password: ""
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