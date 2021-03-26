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
  //获取课程封面
  getImgPathById(id) {
    return request({
      url: `${api_name}/getImgPathById/${id}`,
      method: 'get'
    })
  },

  //根据id获取课程信息
  getCourseInfoById(id) {
    return request({
      url: `${api_name}/course-info/${id}`,
      method: 'get'
    })
  },

  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  
  removeById(id) {
      return request({
          url: `${api_name}/${id}`,
          method: 'delete'
      })
  },

}