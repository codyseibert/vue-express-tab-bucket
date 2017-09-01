<template>
  <div id="app">
    <v-app>
      <drawer />

      <page-header />

      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>

      <page-footer />
    </v-app>
  </div>
</template>

<script>
import Drawer from './components/Drawer.vue'
import PageHeader from './components/Header.vue'
import PageFooter from './components/Footer.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Drawer,
    PageFooter,
    PageHeader
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
  text-decoration: none;
  color: #00bcd4;
}

.toolbar--fixed+main {
    padding-top: 0px;
}

.p1 {
  padding: 4px;
}

.p2 {
  padding: 8px;
}

.p3 {
  padding: 16px;
}

.p4 {
  padding: 32px;
}
</style>
