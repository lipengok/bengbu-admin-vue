<template>
<el-upload
  class="upload-demo"
  action="http://localhost:9529/admin/oss/file/upload"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  list-type="picture">
  <el-button size="small" type="primary" @click="upload">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</template>
<script>
import { Upload } from 'element-ui';
  export default {
    data() {
      return {
        Name: '',
        fileList: [{name: '默认图片', url: 'https://guli-bengbu.oss-cn-beijing.aliyuncs.com/avatar/105.jpg?Expires=1614489104&OSSAccessKeyId=TMP.3KiaJbyRdQuWyyEMdnnBGmg9jq2a5nr6WFbiBVh3cDponCWH4ZceqVYJU67FqtGUwG5tAZQdAwGT6FsvBrcdXTVtLm7gpU&Signature=ViKx0%2FSOl0c%2FoMvCcH%2FPa1dVp70%3D&versionId=CAEQCxiBgMDWm9uGvxciIGY4NTk4ZGUyYzQ3ZjQzNjZiMGY5YWVlOTkyZDBlZjc1&response-content-type=application%2Foctet-stream'}]
      };
    },
     methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>