<template>
    <div>
        <label>{{title}}</label>
        <button class="btnClass" v-on:click="increaseCounter()">You clicked me {{ count }} times.</button> 
    </div>
</template>

<script>
export default {
    props: ['title', 'initialCounterValue'],
    data: function () {
        return {
        count: 0
        }
    },
    methods: {
        increaseCounter() {
            this.count++;
        }
    },
    created() {
      this.count = this.initialCounterValue || 0;
      console.log('button created with initial counter ' + this.count)
  }
}
</script>

<style lang="css">
  .btnClass {
    color: black;
  }
</style>