<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background: url("https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg");
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background: url("https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg");
  }
</style>