<template>
    <div class="box">
        <el-calendar v-model="value"></el-calendar>
    </div>
</template>
<style scoped>
.box{
    width: 1098px;
    height: 550px;
    overflow: auto;
}
.box::-webkit-scrollbar{
    display: none;
}

</style>
<script>
  export default {
    data() {
      return {
          //此时的v-model代表的是value，对于日立来说那就是就今天。
        value: new Date()
      }
    }
  }
</script>