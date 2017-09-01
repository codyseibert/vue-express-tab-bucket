<template>
  <router-link :to="{name: 'songs', query: {search: this.value}}">
    {{value}}
  </router-link>
</template>

<script>
export default {
  props: {
    value: String
  }
}
</script>

<style scoped>

</style>
