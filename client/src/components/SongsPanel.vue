<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title>Songs</v-toolbar-title>

      <router-link :to="{name: 'addSong'}" v-if="$store.state.isUserLoggedIn">
        <v-btn
          class="add-song-btn cyan accent-2"
          light
          medium
          absolute
          middle
          right
          fab
        >
          <v-icon>add</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>

    <v-layout wrap row class="songs">
      <v-flex :class="{
        xs6: !$store.state.isUserLoggedIn,
        xs12: $store.state.isUserLoggedIn,
      }">
        <Song
          v-for="song in evenSongs"
          :key="song.id"
          :song="song" />
      </v-flex>

      <v-flex :class="{
        xs6: !$store.state.isUserLoggedIn,
        xs12: $store.state.isUserLoggedIn,
      }">
        <Song
          v-for="song in oddSongs"
          :key="song.id"
          :song="song" />
      </v-flex>

      <v-flex xs12 class="bottom"/>
    </v-layout>
  </div>
</template>

<script>
import Song from '@/components/Song'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: []
    }
  },
  computed: {
    evenSongs () {
      return this.songs.filter((s, i) => i % 2 === 0)
    },
    oddSongs () {
      return this.songs.filter((s, i) => i % 2 === 1)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = await SongsService.index(value)
      }
    }
  },
  components: {
    Song
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
