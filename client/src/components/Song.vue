<template>
  <v-layout class="song">
    <v-flex xs6 class="left-info">
      <div class="song-title">{{song.title}}</div>
      <div class="song-artist">{{song.artist}}</div>
      <div class="song-genre">{{song.genre}}</div>

      <router-link :to="{ name: 'song', params: { songId: this.song.id }}">
        <v-btn dark primary class="cyan">
          View
        </v-btn>
      </router-link>
    </v-flex>

    <v-flex xs6>
      <img class="album-image" :src="song.albumImage">
      <p>
        {{song.album}}
      </p>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  data () {
    return {
    }
  },
  props: {
    song: Object
  }
}
</script>


<style scoped>
.song {
  border-bottom: 1px solid #DDD;
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

.album-image {
  width: 100%;
}

.left-info {
  padding-top: 60px;
}
</style>
