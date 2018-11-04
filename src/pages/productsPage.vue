<template>
  <div class="productsPage">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'This is Products Page'
    }
  },
  created() {
      console.log('productsPage created')
  }
}
</script>

<style lang="css">
  .homePage {
    color: black;
  }
</style>