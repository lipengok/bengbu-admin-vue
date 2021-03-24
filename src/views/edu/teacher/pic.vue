<template>
<!-- 为ECharts准备一个具备大小（宽高）的Dom -->
<div class="pic" @mouseover="pic"></div>
</template>
<style scoped>
.pic{
  width: 550px;height:500px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  margin: 20px;
}
</style>

<script>
//全部引入
var echarts = require('echarts')
export default {
mounted() {
  this.initCharts();
},
methods: {
  initCharts() {
    this.chart = echarts.init(this.$el);
    this.setOptions();
  },
  setOptions() {
    this.chart.setOption({
      title: {
        text: '互联网软件开发统计草图'
      },
      tooltip: {
          
      },
      xAxis: {
        data: ["前端开发", "java后端开发", "php后端开发", "phony开发", ".NET开发", "C++开发","C语言开发"]
      },
      yAxis: {},
      series: [{
        name: '市场占比',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20,30]
      }]
    })
  }
}
}
</script>
