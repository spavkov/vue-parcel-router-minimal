<template>
  <div class="notFoundPage">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'This is 404 Page'
    }
  },
  created() {
      console.log('notFoundPage created')
  }
}
</script>

<style lang="css">
  .homePage {
    color: black;
  }
</style>