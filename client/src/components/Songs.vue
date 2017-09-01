<template>
  <div>
    <v-layout>
      <v-flex xs4 v-if="$store.state.isUserLoggedIn">
        <recently-viewed-songs />
        <bookmarked-songs />
      </v-flex>

      <v-flex xs8 class="pt-2" :class="{
        xs8: $store.state.isUserLoggedIn,
        xs12: !$store.state.isUserLoggedIn
      }">
        <v-layout>
          <v-flex>
            <songs-search-panel />
          </v-flex>
        </v-layout>

        <v-layout class="mt-2">
          <v-flex>
            <songs-panel />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Song from '@/components/Song'
import SongBrowserLink from '@/components/SongBrowserLink'
import BookmarkedSongs from '@/components/BookmarkedSongs'
import RecentlyViewedSongs from '@/components/RecentlyViewedSongs'
import SongsPanel from '@/components/SongsPanel'
import SongsSearchPanel from '@/components/SongsSearchPanel'

export default {
  components: {
    Song,
    SongBrowserLink,
    BookmarkedSongs,
    RecentlyViewedSongs,
    SongsPanel,
    SongsSearchPanel
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
