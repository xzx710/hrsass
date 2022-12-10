import request from '@/utils/request'

/**
 * 获取部门列表
 * @returns
 */
export function getDepartments() {
  return request({
    url: '/company/department'
  })
}

/**
 * 删除部门
 * @param {String} id - 要被删除部门的id
 * @returns
 */
export function delDepartments(id) {
  return request({
    url: `/company/department/${id}`,
    method: 'delete'
  })
}

/**
 * 新增部门
 * @param {Object} data
 * @returns
 */
export function addDepartments(data) {
  return request({
    url: '/company/department',
    method: 'post',
    data
  })
}

/** *
 * 获取部门详情
 * ***/
export function getDepartDetail(id) {
  return request({
    url: `/company/department/${id}`
  })
}

/**
 * 编辑部门
 *
 * ***/
export function updateDepartments(data) {
  return request({
    url: `/company/department/${data.id}`,
    method: 'put',
    data
  })
}
