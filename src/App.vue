<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/products">Page 2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
      console.log('app created')
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!'
    }
  }
}
</script>

<style lang="css">
  #app {
    color: #56b983;
  }
</style>