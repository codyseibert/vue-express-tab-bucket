<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer
        temporary
        overflow
        v-model="drawer" >
        <div class="logo cyan">
          CodePerfect
          <br>
          <v-icon>keyboard</v-icon>
        </div>
        <v-list class="pt-0" dense>
          <!-- TODO: Refactor This -->
          <v-list-tile @click="gotoRoute('snippits')">
            <v-list-tile-action>
              <v-icon>code</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Snippits</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon>info</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>About</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar fixed class="cyan" dark>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>CodePerfect</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <router-link v-if="!$store.state.token" :to="{name: 'login'}">
            <v-btn flat>
              <v-icon>login</v-icon> Login
            </v-btn>
          </router-link>
        </v-toolbar-items>
      </v-toolbar>

      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>

      <v-footer class="cyan">
        <div class="text-xs-center" style="width: 100%; color: white;">
          © Cody Seibert 2017
        </div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
