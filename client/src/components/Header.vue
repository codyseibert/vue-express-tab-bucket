<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-side-icon @click.stop="openDrawer"></v-toolbar-side-icon>
    <v-toolbar-title class="mr-4">TabTacker</v-toolbar-title>

    <v-toolbar-items>
      <v-btn
        @click="navigateTo({name: 'songs'})"
        flat>
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        @click="navigateTo({name: 'login'})"
        v-if="!$store.state.basicAuthHeader" flat>
        Login
      </v-btn>

      <v-btn
        @click="navigateTo({name: 'register'})"
        v-if="!$store.state.basicAuthHeader" flat>
        Sign Up
      </v-btn>

      <v-menu v-if="$store.state.basicAuthHeader">
        <v-btn slot="activator" flat dark>
          <v-icon>settings</v-icon>
        </v-btn>

        <v-list dense>
          <router-link :to="{name: 'logout'}">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>exit_to_app</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Logout</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </v-list>
      </v-menu>
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
    navigateTo (route) {
      this.$router.push(route)
    },
    openDrawer () {
      this.$store.dispatch('setDrawerOpen', true)
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

.icon {
  color: white;
}

.menu__content .list__tile .icon {
  color: black;
}
</style>
