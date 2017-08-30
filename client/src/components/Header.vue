<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-side-icon @click.stop="openDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Guitar Tabs</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <router-link v-if="!$store.state.basicAuthHeader" :to="{name: 'login'}">
        <v-btn flat>
          <v-icon>login</v-icon> Login
        </v-btn>
      </router-link>

      <router-link v-if="!$store.state.basicAuthHeader" :to="{name: 'register'}">
        <v-btn flat>
          <v-icon>assignment</v-icon> Sign Up
        </v-btn>
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    openDrawer () {
      this.$store.dispatch('setDrawerOpen', true)
    }
  }
}
</script>

<style scoped>

</style>
