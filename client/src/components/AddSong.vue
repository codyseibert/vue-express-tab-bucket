<template>
  <div>
    <v-layout>
      <v-flex>
        <h4 class="text-xs-left">Add Song</h4>

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
          name="youtubeId"
          label="YouTube Id"
          required
          :rules="[rules.required]"
          v-model="youtubeId"
        ></v-text-field>

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

        <div>
          {{error}}
        </div>

        <v-btn @click="addSong">
          <v-icon>add</v-icon> Add Song
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
import SongsService from '../services/SongsService'

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
    tab: fieldHelper('tab')
  },
  methods: {
    async addSong () {
      const song = {
        title: this.title,
        artist: this.artist,
        genre: this.genre,
        youtubeId: this.youtubeId,
        lyrics: this.lyrics,
        tab: this.tab
      }
      this.error = null
      const allFieldsAreFilledIn = Object.keys(song).every((key) => !!song[key])
      if (allFieldsAreFilledIn) {
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
      } else {
        this.error = 'Please fill in all the required fields'
      }
    }
  }
}
</script>


<style scoped>
</style>
