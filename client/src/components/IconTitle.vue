<template>
  <div>
    <v-icon>{{icon}}</v-icon> <span class="icon-text">{{title}}</span>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'icon'
  ]
}
</script>


<style scoped>
.application--light .btn .icon {
  color: white;
}

.icon-text {
  margin-left: 6px;
  color: white;
}
</style>
