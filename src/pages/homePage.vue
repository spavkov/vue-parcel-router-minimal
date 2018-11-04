<template>
  <div class="homePage">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'This is home Page'
    }
  },
  created() {
      console.log('homePage created')
  }
}
</script>

<style lang="css">
  .homePage {
    color: black;
  }
</style>