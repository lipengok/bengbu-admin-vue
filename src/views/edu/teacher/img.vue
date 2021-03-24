<template>
<div class="box">
<div class="demo-image__placeholder">
  <div class="block">
    <span class="demonstration">默认</span>
    <el-image :src="src"></el-image>
  </div>
  <div class="block">
    <span class="demonstration" slot="err">加载失败</span>
    <el-image src="src"></el-image>
  </div>
  <div class="block">
    <span class="demonstration">自定义</span>
    <el-image :src="src">
      <div slot="placeholder" class="image-slot">
        加载中<span class="dot">...</span>
      </div>
    </el-image>
  </div>
  <div class="demo-image__preview">
  <span class="demonstration">大图预览</span>
  <el-image 
    style="width: 100px; height: 100px"
    :src="src" 
    :preview-src-list="srcList">
  </el-image>
</div>
</div>
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
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      }
    }
  }
</script>