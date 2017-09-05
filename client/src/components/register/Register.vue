<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Sign Up" class="mt-4">
        <form
          name="tab-tracker-form"
          autocomplete="off">
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
            autocomplete="new-password"
          ></v-text-field>
        </form>

        <div
          v-if="error"
          v-html="error"
          class="registration-error mb-2"/>

        <v-btn @click="login" class="cyan">
          <icon-title icon="assignment" title="Sign Up" />
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
import IconTitle from '@/components/IconTitle'

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
        const response = await AuthenticationService.register(credentials)
        this.$store.dispatch('setToken', response.token)
        this.$store.dispatch('setUser', response.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (response) {
        this.error = response.data.message
      }
    }
  },
  components: {
    Panel,
    IconTitle
  }
}
</script>


<style scoped>
.registration-error {
  color: red;
}

</style>
