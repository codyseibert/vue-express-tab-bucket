<template>
  <v-layout column>
    <v-flex xs12>
      <h4 class="text-xs-center">Sign Up</h4>
    </v-flex>

    <v-flex xs6 offset-xs3>
      <v-text-field
        name="email"
        label="Email"
        v-model="email"
      ></v-text-field>

      <v-text-field
        name="password"
        label="Password"
        type="password"
        v-model="password"
      ></v-text-field>

      <div v-if="error">
        {{error}}
      </div>

      <v-btn @click="login">
        <v-icon>assignment</v-icon> Sign Up
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '../services/authentication_service'

export default {
  data () {
    return {
      error: null,
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      try {
        this.error = null
        const credentials = {
          email: this.email,
          password: this.password
        }
        await AuthenticationService.register(credentials)
        this.$store.dispatch('setCredentials', credentials)
        this.$router.push({
          name: 'songs'
        })
      } catch (response) {
        console.log('response', response)
        this.error = response.data.error
      }
    }
  }
}
</script>


<style scoped>

</style>
