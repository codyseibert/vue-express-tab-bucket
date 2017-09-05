<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>

    <div class="p4">
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>


<style scoped>
</style>
