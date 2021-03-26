import request from '@/utils/request'
const api_name = '/admin/edu/teacher'
export default {
  //  获取讲师的列表
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  //  根据id删除讲师
  removeById(teacherId) {
    return request({
      url: `${api_name}/${teacherId}`,
      method: 'delete'
    })
  },
  //  根据id删除讲师
  removeByIds(teacherIds) {
    return request({
      url: `${api_name}/ids`,
      method: 'post',
      data: teacherIds
    })
  },
  //  新增讲师路由
  save(teacher) {
      return request({
          url: api_name,
          method: 'post',
          data: teacher
      })
  },
  //根据id获取讲师信息
  getById(id) {
      return request({
          url: `${api_name}/${id}`,
          method: 'get'
      })
  },
  //根据id修改讲师信息
  updateById(id,teacher) {
    return request({
        url: `${api_name}/${id}`,
        method: 'put',
        data: teacher
    })
  },
  //  新增讲师路由
  getList() {
    return request({
        url: api_name,
        method: 'get'
    })
  },
}