<template>
  <div>
    <v-layout>
      <v-flex xs4>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Recently Viewed</v-toolbar-title>
          </v-toolbar>

          <v-data-table
            :headers="[{
              text: 'Title',
              value: 'title'
            },{
              text: 'Artist',
              value: 'artist'
            }]"
            hide-actions
            :pagination.sync="pagination"
            :items="recent"
          >
            <template slot="items" scope="props">
              <td class="text-xs-right">{{props.item.title}}</td>
              <td class="text-xs-right">{{props.item.artist}}</td>
            </template>
          </v-data-table>
        </div>

        <div class="white elevation-2 mt-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Bookmarked Songs</v-toolbar-title>
          </v-toolbar>

          <v-data-table
            :headers="[{
              text: 'Title',
              value: 'title'
            },{
              text: 'Artist',
              value: 'artist'
            }]"
            :pagination.sync="pagination"
            :items="bookmarks"
          >
            <template slot="items" scope="props">
              <td class="text-xs-right">{{props.item.title}}</td>
              <td class="text-xs-right">{{props.item.artist}}</td>
            </template>
          </v-data-table>
        </div>
      </v-flex>

      <v-flex xs8>
        <v-layout>
          <v-flex>
            <div class="white elevation-2">
              <v-toolbar flat dense class="cyan" dark>
                <v-toolbar-title>Search for Songs</v-toolbar-title>
              </v-toolbar>

              <div class="search-panel">
                <v-text-field
                  name="search"
                  label="Search by Song, Artist, or Genre"
                  v-model="search"
                ></v-text-field>
              </div>
            </div>
          </v-flex>
        </v-layout>

        <v-layout class="mt-2">
          <v-flex>
            <div class="white elevation-2">
              <v-toolbar flat dense class="cyan" dark>
                <v-toolbar-title>Songs</v-toolbar-title>

                <router-link :to="{name: 'addSong'}">
                  <v-btn
                    class="add-song-btn deep-orange"
                    dark
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

              <v-layout class="songs">
                <v-flex class="pr-2">
                  <Song
                    v-for="song in songs"
                    :key="song.id"
                    :song="song" />
                </v-flex>
              </v-layout>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Song from '@/components/Song'
import SongsService from '@/services/SongsService'
import RecentsService from '@/services/RecentsService'
import BookmarksService from '@/services/BookmarksService'

export default {
  data () {
    return {
      search: '',
      recent: [
        {
          title: 'Watch The Wind Blow By',
          artist: 'Tim McGraw',
          genre: 'Country',
          youtubeId: 'HmVZBKPX3u0',
          lyrics: '',
          tab: ''
        },
        {
          title: 'Watch The Wind Blow By',
          artist: 'Tim McGraw',
          genre: 'Country',
          youtubeId: 'HmVZBKPX3u0',
          lyrics: '',
          tab: ''
        },
        {
          title: 'Watch The Wind Blow By',
          artist: 'Tim McGraw',
          genre: 'Country',
          youtubeId: 'HmVZBKPX3u0',
          lyrics: '',
          tab: ''
        },
        {
          title: 'Watch The Wind Blow By',
          artist: 'Tim McGraw',
          genre: 'Country',
          youtubeId: 'HmVZBKPX3u0',
          lyrics: '',
          tab: ''
        },
        {
          title: 'Watch The Wind Blow By',
          artist: 'Tim McGraw',
          genre: 'Country',
          youtubeId: 'HmVZBKPX3u0',
          lyrics: '',
          tab: ''
        }
      ],
      bookmarks: null,
      pagination: {
        sortBy: 'date',
        descending: true
      },
      songs: null
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
  async mounted () {
    this.songs = await SongsService.index()
    this.recent = await RecentsService.index()
    this.bookmarks = await BookmarksService.index()
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
</style>
