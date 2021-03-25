import request from '@/utils/request'
const api_name = '/admin/edu/course'
export default {
  //新增课程
  saveCourseInfo(courseInfo) {
    return request({
      url: `${api_name}/save-course-info`,
      method: 'post',
      data: courseInfo
    })
  },

}