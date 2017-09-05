<template>
  <div>Logout</div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('setToken', null)
    this.$store.dispatch('setUser', null)
    this.$router.push({
      name: 'songs'
    })
  }
}
</script>


<style scoped>

</style>
