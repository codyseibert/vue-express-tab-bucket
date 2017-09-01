<template>
  <div>
    <v-layout>
      <v-flex>
        <h4 class="text-xs-left">Create Song</h4>
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
              v-model="title"
            ></v-text-field>

            <v-text-field
              name="artist"
              label="Artist"
              required
              :rules="[rules.required]"
              v-model="artist"
            ></v-text-field>

            <v-text-field
              name="genre"
              label="Genre"
              required
              :rules="[rules.required]"
              v-model="genre"
            ></v-text-field>

            <v-text-field
              name="album"
              label="Album"
              required
              :rules="[rules.required]"
              v-model="album"
            ></v-text-field>

            <v-text-field
              name="albumImage"
              label="Album Image URL"
              required
              :rules="[rules.required]"
              v-model="albumImage"
            ></v-text-field>

            <v-text-field
              name="youtubeId"
              label="YouTube Id"
              required
              :rules="[rules.required]"
              v-model="youtubeId"
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
              v-model="lyrics">
            </v-text-field>

            <v-text-field
              name="tab"
              label="Tab"
              multi-line
              required
              :rules="[rules.required]"
              v-model="tab">
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

        <v-btn @click="addSong">
          <v-icon>save</v-icon> Create
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
import SongsService from '@/services/SongsService'

const fieldHelper = (key) => (
  {
    get () {
      return this.$store.state.addSongForm[key]
    },
    set (value) {
      this.$store.dispatch('setFieldInAddSongForm', {
        key: key,
        value: value
      })
    }
  }
)

export default {
  data () {
    return {
      error: null,
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },
  computed: {
    title: fieldHelper('title'),
    artist: fieldHelper('artist'),
    genre: fieldHelper('genre'),
    youtubeId: fieldHelper('youtubeId'),
    lyrics: fieldHelper('lyrics'),
    tab: fieldHelper('tab'),
    album: fieldHelper('album'),
    albumImage: fieldHelper('albumImage')
  },
  methods: {
    async addSong () {
      const song = {
        title: this.title,
        artist: this.artist,
        genre: this.genre,
        youtubeId: this.youtubeId,
        lyrics: this.lyrics,
        tab: this.tab,
        album: this.album,
        albumImage: this.albumImage
      }
      this.error = null
      const allFieldsAreFilledIn = Object.keys(song).every((key) => !!song[key])
      if (!allFieldsAreFilledIn) {
        this.error = 'Please fill in all the required fields'
        return
      }

      try {
        const response = await SongsService.post(song)
        this.$store.dispatch('clearAddSongForm')
        this.$router.push({
          name: 'song',
          params: {
            songId: response.id
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
