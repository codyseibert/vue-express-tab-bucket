<template>
  <div>
    <v-layout class="song">
      <v-flex xs6>
        <song-info :song="song" />
      </v-flex>

      <v-flex xs6>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>YouTube Video</v-toolbar-title>
          </v-toolbar>

          <div class="p-4">
            <youtube
              :video-id="song.youtubeId"
              :player-width="500"
              :player-height="194">
            </youtube>
          </div>
        </div>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs6>
        <div class="white elevation-2 mt-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Tabs</v-toolbar-title>
          </v-toolbar>

          <textarea
            readonly
            v-model="song.tab">
          </textarea>
        </div>
      </v-flex>

      <v-flex>
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
  </div>
</template>


<script>
import SongsService from '@/services/SongsService'
import SongBrowserLink from '@/components/songs/SongBrowserLink'
import SongInfo from '@/components/viewSong/SongInfo'

export default {
  data () {
    return {
      song: {}
    }
  },
  components: {
    SongBrowserLink,
    SongInfo
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = await SongsService.show(songId)
  }
}
</script>


<style scoped>
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
  font-family: monospace;
  width: 100%;
  border: none;
  height: 600px;
  border-style: none;
  border-color: Transparent;
  overflow: auto;
  padding: 40px;
}

.p-4 {
  padding: 20px;
}

.album-image {
  width: 80%;
}
</style>
