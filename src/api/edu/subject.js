import request from '@/utils/request'
const api_name = '/admin/edu/subject'
export default {
  getNestedTreeList() {
    return request({
      url: `${api_name}`,
      method: 'get'
    })
  },
  getListByParentId(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get',
      params: id
    })
  }
}