<template>
  <div class="productsPage">
    <h1>{{msg}}</h1>
        <simpleButton initial-counter-value="5"></simpleButton>
  </div>
</template>

<script>
import simpleButton from '/src/components/simpleButton';
export default {
  components: {
      simpleButton
  },
  data () {
    return {
      msg: 'This is Products Page'
    }
  },
  created() {
      console.log('products Page created')
  }
}
</script>

<style lang="css">
  .homePage {
    color: black;
  }
</style>