/*
 * @Author: xiezexuan
 * @Date: 2022-12-26 13:31:10
 * @LastEditors: xiezexuan
 * @LastEditTime: 2023-01-01 13:59:12
 * @Description:
 * Copyright (c) 2022 by xiezexuan, All Rights Reserved.
 */
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

/** *
 *  封装一个导入员工的接口
 *
 * ***/

export function importEmployee(data) {
  return request({
    url: '/sys/user/batch',
    method: 'post',
    data
  })
}

/** *
 *  获取某个用户的基本信息
 *
 * ***/
export function getUserDetailById(id) {
  return request({
    url: `/sys/user/${id}`
  })
}

/** *
 *
 * 保存员工的基本信息
 * **/
export function saveUserDetailById(data) {
  return request({
    url: `/sys/user/${data.id}`,
    method: 'put',
    data
  })
}

/** *
 *  读取用户详情的基础信息
 * **/
export function getPersonalDetail(id) {
  return request({
    url: `/employees/${id}/personalInfo`
  })
}

/** *
 *  更新用户详情的基础信息
 * **/
export function updatePersonal(data) {
  return request({
    url: `/employees/${data.userId}/personalInfo`,
    method: 'put',
    data
  })
}

/** **
 * 获取用户的岗位信息
 *
 * ****/
export function getJobDetail(id) {
  return request({
    url: `/employees/${id}/jobs`
  })
}

/**
 * 保存岗位信息
 * ****/
export function updateJob(data) {
  return request({
    url: `/employees/${data.userId}/jobs`,
    method: 'put',
    data
  })
}

/** *
 * 给用户分配角色
 * ***/
export function assignRoles(data) {
  return request({
    url: '/sys/user/assignRoles',
    data,
    method: 'put'
  })
}
