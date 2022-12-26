// 引入axios实例对象
import request from '@/utils/request'

/**
 * 定义分页查询参数数据类型
 * @typedef {Object} PageOptions
 * @property {String} page
 * @property {String} pageszie
 */

/**
 * 定义角色数据类型
 * @typedef {Object} Role
 * @property {String} id
 * @property {String} name
 * @property {String} description
 * @property {String} companyId
 */

/**
 * 定义角色列表数据类型
 * @typedef {Object} RoleList
 * @property {Number} total - 总角色数
 * @property {Role[]} rows
 */

/**
 * 定义公司数据类型
 * @typedef {Object} Company
 * @property {String} auditState - 审核状态 0:待审核，1：已审核
 * @property {Number} balance - 当前余额
 * @property {String} businessLicenseId - 营业执照
 * @property {String} companyAddress - 公司地址
 * @property {String} companyArea - 公司地区
 * @property {String} companyPhone - 公司电话
 * @property {String} companySize - 公司规模
 * @property {String} createTime - 创建时间
 * @property {String} expirationDate - 到期时间
 * @property {String} id - 企业id
 * @property {String} industry - 所属行业
 * @property {String} legalRepresentative - 法人代表
 * @property {String} mailbox - 邮箱
 * @property {String} managerId - 企业登录账号ID
 * @property {String} name - 公司名称
 * @property {String} remarks - 备注
 * @property {String} renewalDate - 续期时间
 * @property {Number} state - 状态 0：不可用，1：可用
 * @property {String} version - 当前版本
 */

/**
 * 获取角色列表
 * @param {PageOptions} params
 * @returns {Promise<import('./user').ResponseData<RoleList>>}
 */
export function getRoleList(params) {
  return request({
    url: '/sys/role',
    params
  })
}

/**
 * 获取公司信息
 * @param {String} companyId - 企业id
 * @returns {Promise<import('./user').ResponseData<Company>>}
 */
export function getCompanyInfo(companyId) {
  return request({
    url: `/company/${companyId}`
  })
}

/**
 * 删除角色
 * @param {Number} id
 * @returns {Promise<import('./user').ResponseData<Company>>}
 */
export function deleteRole(id) {
  return request({
    url: `/sys/role/${id}`,
    method: 'delete'
  })
}

/**
 * 修改角色
 * @param {Company} data
 * @returns {Promise<import('./user').ResponseData<Company>>}
 */
export function updateRole(data) {
  return request({
    url: `/sys/role/${data.id}`,
    method: 'put',
    data
  })
}

/**
 * 获取角色详情
 * @param {String} id
 * @returns {Promise<import('./user').ResponseData<Company>>}
 */
export function getRoleDetail(id) {
  return request({
    url: `/sys/role/${id}`
  })
}

/**
 * 新增角色
 * @param {Company} data
 * @returns {Promise<import('./user').ResponseData<Company>>}
 */
export function addRole(data) {
  return request({
    url: '/sys/role',
    method: 'post',
    data
  })
}

