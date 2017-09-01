<template>
  <v-layout class="song text-xs-right">
    <v-flex xs6 class="left-info">
      <div class="song-title">
        <song-browser-link :value="song.title" />
      </div>
      <div class="song-artist">
        <song-browser-link :value="song.artist" />
      </div>
      <div class="song-genre">
        <song-browser-link :value="song.genre" />
      </div>

      <router-link :to="{ name: 'song', params: { songId: this.song.id }}">
        <v-btn dark primary class="cyan view-btn">
          View
        </v-btn>
      </router-link>
    </v-flex>

    <v-flex xs6 class="text-xs-center">
      <img class="album-image" :src="song.albumImage">
      <br>
      <song-browser-link :value="song.album" />
    </v-flex>
  </v-layout>
</template>


<script>
import SongBrowserLink from '@/components/songs/SongBrowserLink'

export default {
  data () {
    return {
    }
  },
  props: {
    song: Object
  },
  components: {
    SongBrowserLink
  }
}
</script>


<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.icon {
  margin-right: 10px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}

.left-info {
  position: relative;
}

.view-btn {
  margin: 0px;
  margin-top: 10px;
}
</style>
