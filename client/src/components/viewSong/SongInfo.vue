<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title>Song Info</v-toolbar-title>
    </v-toolbar>

    <v-layout class="pb-2">
      <v-flex xs8>
        <v-layout column>
          <v-flex>
            <div class="text-xs-right p-4">
              <div class="song-title">
                <song-browser-link :value="song.title" />
              </div>
              <div class="song-artist">
                <song-browser-link :value="song.artist" />
              </div>
              <div class="song-genre">
                <song-browser-link :value="song.genre" />
              </div>
            </div>
          </v-flex>

          <v-flex v-if="$store.state.isUserLoggedIn">
            <router-link
              v-if="song.UserId === $store.state.user.id"
              :to="{ name: 'editSong', params: { songId: this.song.id }}">
              <v-btn dark primary class="cyan">
                <v-icon>mode_edit</v-icon> Edit Song
              </v-btn>
            </router-link>

            <v-btn v-if="bookmark" @click="unsetAsBookmark" dark primary class="cyan">
              <v-icon>bookmark</v-icon> Unbookmark
            </v-btn>

            <v-btn v-if="!bookmark" @click="setAsBookmark" dark primary class="cyan">
              <v-icon>bookmark_border</v-icon> Bookmark
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs4>
        <img class="album-image pt-2" :src="song.albumImage">
        <p>
          <song-browser-link :value="song.album" />
        </p>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
import RecentsService from '@/services/RecentsService'
import BookmarksService from '@/services/BookmarksService'
import SongBrowserLink from '@/components/songs/SongBrowserLink'

export default {
  data () {
    return {
      bookmark: false
    }
  },
  props: {
    song: Object
  },
  components: {
    SongBrowserLink
  },
  methods: {
    async setAsBookmark () {
      this.bookmark = await BookmarksService.post({
        songId: this.song.id
      })
    },
    async unsetAsBookmark () {
      await BookmarksService.delete(this.bookmark.bookmarkId)
      this.bookmark = null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    if (this.$store.state.isUserLoggedIn) {
      this.bookmark = (await BookmarksService.index({
        songId: songId
      }))[0]
      RecentsService.post({
        songId: songId
      })
    }
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
  height: 400px;
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
