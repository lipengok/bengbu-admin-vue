import request from '@/utils/request'
const api_name = '/admin/oss/file/upload'
export default {
    //上传文件的方法
    upload(file){
        return request({
            url: api_name,
            method: postMessage,
            data: file
        });
    },
  }