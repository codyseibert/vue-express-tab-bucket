<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title>Search for Songs</v-toolbar-title>
    </v-toolbar>

    <div class="search-panel">
      <v-text-field
        name="search"
        label="Search by Song, Artist, Album, or Genre"
        v-model="search"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {search: this.search}
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.search = value
      }
    }
  }
}
</script>


<style scoped>
.search-panel {
  padding-left: 20px;
  padding-right: 20px;
}

.songs {
  height: 578px;
  overflow: scroll;
}

.add-song-btn {
  top: -4px;
}

.bottom {
  height: 40px;
}
</style>
