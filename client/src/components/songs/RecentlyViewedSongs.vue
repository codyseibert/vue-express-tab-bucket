<template>
  <div class="white elevation-2 mt-2">
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
      :pagination.sync="pagination"
      :items="recent"
    >
      <template slot="items" scope="props">
        <td class="text-xs-right">
          <song-browser-link :value="props.item.title" />
        </td>
        <td class="text-xs-right">
          <song-browser-link :value="props.item.artist" />
        </td>
        <td>
          <router-link :to="{ name: 'song', params: { songId: props.item.id }}">
            <v-btn dark primary class="cyan">
              View
            </v-btn>
          </router-link>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import SongBrowserLink from '@/components/songs/SongBrowserLink'
import RecentsService from '@/services/RecentsService'

export default {
  data () {
    return {
      recent: [],
      pagination: {
        sortBy: 'date',
        descending: true
      }
    }
  },
  components: {
    SongBrowserLink
  },
  async mounted () {
    if (this.$store.state.isUserLoggedIn) {
      this.recent = await RecentsService.index()
    }
  }
}
</script>


<style scoped>
</style>
