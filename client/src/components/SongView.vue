<template>
  <v-layout class="song">
    <v-flex xs6>
      <div class="song-title">{{song.title}}</div>
      <div class="song-artist">{{song.artist}}</div>
      <div class="song-genre">{{song.genre}}</div>

      <router-link :to="{ name: 'song', params: { songId: this.song._id }}">
        <v-btn dark primary class="cyan">
          <v-icon>library_music</v-icon> View
        </v-btn>
      </router-link>
    </v-flex>

    <v-flex xs6>
      <youtube
        :video-id="song.youtubeId"
        :player-width="400"
        :player-height="200">
      </youtube>
    </v-flex>
  </v-layout>
</template>


<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    this.song = await SongsService.show(this.$store.state.route.params.songId)
  }
}
</script>


<style scoped>
.song {
  padding: 20px;
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

a {
  text-decoration: none;
}
</style>
