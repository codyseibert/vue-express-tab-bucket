<template>
  <div>Logout</div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('setCredentials', null)
    this.$router.push({
      name: 'songs'
    })
  }
}
</script>


<style scoped>

</style>
