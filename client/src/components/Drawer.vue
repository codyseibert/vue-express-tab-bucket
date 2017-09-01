<template>
  <v-navigation-drawer
    temporary
    overflow
    v-model="isOpen" >
    <div class="logo cyan">
      TabTracker
      <br>
      <v-icon>queue_music</v-icon>
    </div>
    <v-list dense>
      <router-link :to="{name: 'songs'}">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>music_note</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Browse</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </router-link>

      <router-link :to="{name: 'about'}">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    isOpen: {
      get () {
        return this.$store.state.isDrawerOpen
      },
      set (value) {
        this.$store.dispatch('setDrawerOpen', value)
      }
    }
  }
}
</script>

<style scoped>
.logo {
  color: white;
  padding-top: 20px;
  font-size: 40px;
}
.logo .icon {
  color: white;
  font-size: 110px;
  position: relative;
  top: -20px;
}

a {
  display: block;
}

a:hover > li {
  background-color: #b2ebf2;
  color: white;
}

li {
  transition: all 0.5s;
  width: 100%;
  margin: 0px;
  cursor: pointer;
}

.list__tile__content {
  padding-top: 4px;
}

</style>
