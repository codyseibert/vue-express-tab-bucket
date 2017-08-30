<template>
  <v-layout class="song">
    <v-flex xs6>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Song Info</v-toolbar-title>
        </v-toolbar>

        <div class="text-xs-left p-4">
          <div class="song-title">{{song.title}}</div>
          <div class="song-artist">{{song.artist}}</div>
          <div class="song-genre">{{song.genre}}</div>
        </div>
      </div>

      <div class="white elevation-2 mt-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>YouTube Video</v-toolbar-title>
        </v-toolbar>

        <div class="p-4">
          <youtube
            :video-id="song.youtubeId"
            :player-width="500"
            :player-height="300">
          </youtube>
        </div>
      </div>

    </v-flex>

    <v-flex xs6>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Tabs</v-toolbar-title>
        </v-toolbar>

        <textarea
          readonly
          v-model="song.tab">
        </textarea>
      </div>

      <div class="white elevation-2 mt-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Lyrics</v-toolbar-title>
        </v-toolbar>

        <textarea
          readonly
          v-model="song.lyrics">
        </textarea>
      </div>
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

textarea {
  width: 100%;
  border: none;
  height: 400px;
  border-style: none;
  border-color: Transparent;
  overflow: auto;
  padding: 40px;
}

.p-4 {
  padding: 20px;
}
</style>
