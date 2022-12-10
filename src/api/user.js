import request from '@/utils/request'

/**
 * 用户登录
 * @param {Object} data - 登录数据
 * @returns
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
 * @returns
 */
export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

/**
 * 获取用户的详细信息
 * @param {String} id - 要获取详细信息的用户id
 */
export function getUserDetailById(id) {
  return request({
    url: `/sys/user/${id}`
  })
}

