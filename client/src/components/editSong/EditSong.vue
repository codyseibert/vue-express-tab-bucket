<template>
  <div>
    <v-layout>
      <v-flex>
        <h4 class="text-xs-left">Edit Song</h4>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs4>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Song Metadata</v-toolbar-title>
          </v-toolbar>

          <div class="p4">
            <v-text-field
              name="title"
              label="Title"
              required
              :rules="[rules.required]"
              v-model="song.title"
            ></v-text-field>

            <v-text-field
              name="artist"
              label="Artist"
              required
              :rules="[rules.required]"
              v-model="song.artist"
            ></v-text-field>

            <v-text-field
              name="genre"
              label="Genre"
              required
              :rules="[rules.required]"
              v-model="song.genre"
            ></v-text-field>

            <v-text-field
              name="album"
              label="Album"
              required
              :rules="[rules.required]"
              v-model="song.album"
            ></v-text-field>

            <v-text-field
              name="albumImage"
              label="Album Image URL"
              required
              :rules="[rules.required]"
              v-model="song.albumImage"
            ></v-text-field>

            <v-text-field
              name="youtubeId"
              label="YouTube Id"
              required
              :rules="[rules.required]"
              v-model="song.youtubeId"
            ></v-text-field>
          </div>
        </div>
      </v-flex>

      <v-flex xs8>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Song Structure</v-toolbar-title>
          </v-toolbar>

          <div class="p4">
            <v-text-field
              name="lyrics"
              label="Lyrics"
              multi-line
              required
              :rules="[rules.required]"
              v-model="song.lyrics">
            </v-text-field>

            <v-text-field
              name="tab"
              label="Tab"
              multi-line
              required
              :rules="[rules.required]"
              v-model="song.tab">
            </v-text-field>
          </div>
        </div>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <div>
          {{error}}
        </div>

        <v-btn @click="saveSong">
          <v-icon>save</v-icon> Save
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {},
      error: null,
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = await SongsService.show(songId)
  },
  methods: {
    async saveSong () {
      const keys = [
        'title',
        'artist',
        'genre',
        'youtubeId',
        'lyrics',
        'tab',
        'album',
        'albumImage'
      ]
      const isValid = keys.every((key) => !!this.song[key])

      if (!isValid) {
        this.error = 'Please fill in all the required fields'
        return
      }

      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: this.song.id
          }
        })
      } catch (err) {
        this.error = err.data
      }
    }
  }
}
</script>


<style scoped>

</style>
