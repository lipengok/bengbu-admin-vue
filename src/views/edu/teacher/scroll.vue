<template>
    <ul v-infinite-scroll="load" style="overflow:auto" infinite-scroll-delay="200">
        <li v-for="i in count">{{ i }}</li>
    </ul>
</template>
<style scoped>
ul{
    width: 1098px;
    height: 500px;
}
ul li{
    width: 800px;
    height: 100px;
    background: lightblue;
    margin: 20px;
}
</style>
<script>
  export default {
    data () {
      return {
        count: 10
      }
    },
    methods: {
      load () {
        this.count += 2
      }
    }
  }
</script>