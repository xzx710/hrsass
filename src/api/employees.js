// 引入axios实例对象
import request from '@/utils/request'

/**
 * 定义员工数据类型
 * @typedef {Object} Employee
 * @property {String} id
 * @property {String} mobile
 * @property {String} username
 * @property {String} password
 * @property {Number} enableState
 * @property {String|Null} createTime
 * @property {String} companyId
 * @property {String} companyName
 * @property {String} departmentId
 * @property {String} timeOfEntry
 * @property {Number} formOfEmployment
 * @property {String} workNumber
 * @property {Null} formOfManagement
 * @property {Null} workingCity
 * @property {String|Null} correctionTime
 * @property {Number} inServiceStatus
 * @property {String} departmentName
 * @property {String} level
 * @property {String|Null} staffPhoto - 用户头像地址
 */

/**
 * 定义员工简单数据类型
 * @typedef {Object} EmployeeSimple
 * @property {String} id
 * @property {String} username
 */

/**
 * 定义员工简单列表数据类型
 * @typedef {Object} EmployeeSimpleList
 * @property {Number} total - 员工总数
 * @property {EmployeeSimple[]} rows
 */

/**
 * 获取员工的简单列表
 * @returns {Promise<import('./user').ResponseData<EmployeeSimpleList>>}
 */
export function getEmployeeSimple() {
  return request({
    url: '/sys/user/simple'
  })
}

/**
 * 获取员工的综合列表数据
 * ***/
export function getEmployeeList(params) {
  return request({
    url: '/sys/user',
    params
  })
}

/**
 * 删除员工接口
 * ****/
export function delEmployee(id) {
  return request({
    url: `/sys/user/${id}`,
    method: 'delete'
  })
}

/** **
 *  新增员工的接口
 * **/
export function addEmployee(data) {
  return request({
    method: 'post',
    url: '/sys/user',
    data
  })
}
