

<template>
  <div class="homePage">
    <h1>{{msg}}</h1>
    <simpleButton initial-counter-value="5"></simpleButton>
    <simpleButton initial-counter-value="6"></simpleButton>        
    <simpleButton ></simpleButton>
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