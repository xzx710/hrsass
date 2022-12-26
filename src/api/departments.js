/*
 * @Author: xiezexuan
 * @Date: 2022-12-26 13:31:10
 * @LastEditors: xiezexuan
 * @LastEditTime: 2022-12-26 13:39:08
 * @Description:
 * Copyright (c) 2022 by xiezexuan, All Rights Reserved.
 */
// 引入axios实例对象
import request from '@/utils/request'

/**
 * 定义部门数据类型
 * @typedef {Object} Department
 * @property {String} id - 部门id
 * @property {String} pid - 父部门id
 * @property {String} companyId - 公司id
 * @property {String} name - 部门名称
 * @property {String|Null} code - 部门编码
 * @property {String|Null} managerId - 负责人id
 * @property {String|Null} manager - 负责人名字
 * @property {String|Null} introduce - 部门介绍
 * @property {Null} createTime - 部门创建时间
 */

/**
 * 获取部门列表
 * @typedef {Object} DepartmentslistData
 * @property {String} companyId - 公司id
 * @property {String} companyName - 公司名称
 * @property {String} companyManage - 公司负责人
 * @property {Department} depts- 公司负责人
 * @returns {Promise<import('./user').ResponseData<DepartmentslistData>>}
 */
export function getDepartments() {
  return request({
    url: '/company/department'
  })
}

/**
 * 删除部门
 * @param {String} id - 要被删除部门的id
 * @returns {Promise<import('./user').ResponseData<Null>>}
 */
export function delDepartments(id) {
  return request({
    url: `/company/department/${id}`,
    method: 'delete'
  })
}

/**
 * 新增部门
 * @param {Department} data
 * @returns {Promise<import('./user').ResponseData<Department>>}
 */
export function addDepartments(data) {
  return request({
    url: '/company/department',
    method: 'post',
    data
  })
}

/**
 * 根据id获取部门详情
 * @param {String} id - 部门id
 * @returns {Promise<import('./user').ResponseData<Department>>}
 */
export function getDepartDetail(id) {
  return request({
    url: `/company/department/${id}`
  })
}

/**
 * 更新部门
 * @param {Department} data
 * @returns {Promise<import('./user').ResponseData<Any>>}
 */
export function updateDepartments(data) {
  return request({
    url: `/company/department/${data.id}`,
    method: 'put',
    data
  })
}
