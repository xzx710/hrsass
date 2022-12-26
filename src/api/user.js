// 引入axios实例对象
import request from '@/utils/request'

/**
 * 定义登录数据类型
 * @typedef {Object} LoginData
 * @property {String} mobile - 手机号
 * @property {String} password - 密码
 */

/**
 * 定义返回数据类型
 * @template T
 * @typedef {Object} ResponseData
 * @property {Number} code
 * @property {T} data
 * @property {String} message
 * @property {Boolean} success
 */

/**
 * 用户登录
 * @param {LoginData} data - 登录数据
 * @returns {Promise<ResponseData<String>>}
 */
export function login(data) {
  return request({
    url: '/sys/login', // 因为所有的接口都要跨域 表示所有的接口要带 /api
    method: 'post',
    data
  })
}

/**
 * 获取用户基础信息
 * @typedef {Object} UserInfo - 定义用户信息数据类型
 * @property {String} userId - 用户id
 * @property {String} mobile - 用户手机号
 * @property {String} username - 用户名
 * @property {String} company - 公司名
 * @property {String} companyId - 公司id
 * @property {Object} roles - 用户角色
 * @property {String[]} apis - 用户可访问api地址列表
 * @property {String[]} menus - 用户菜单列表
 * @property {String[]} points
 * @property {Null} authCacheKey
 * @returns {Promise<ResponseData<UserInfo>>}
 */
export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

/**
 * 获取用户的详细信息
 * @typedef {Object} UserDetail - 定义用户详细信息数据类型
 * @property {String} id
 * @property {String} mobile
 * @property {String} username
 * @property {String} password
 * @property {Number} enableState
 * @property {String} createTime
 * @property {String} companyId
 * @property {String} companyName
 * @property {String} departmentId
 * @property {String} timeOfEntry
 * @property {Number} formOfEmployment
 * @property {String} workNumber
 * @property {Null} formOfManagement
 * @property {Null} workingCity
 * @property {String} correctionTime
 * @property {Number} inServiceStatus
 * @property {String} departmentName
 * @property {String[]} roleIds
 * @property {String} staffPhoto - 用户头像地址
 * @param {String} id - 要获取详细信息的用户id
 * @returns {Promise<ResponseData<UserDetail>>}
 */
export function getUserDetailById(id) {
  return request({
    url: `/sys/user/${id}`
  })
}

