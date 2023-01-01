/*
 * @Author: xiezexuan
 * @Date: 2023-01-01 15:08:32
 * @LastEditors: xiezexuan
 * @LastEditTime: 2023-01-01 15:08:40
 * @Description:
 * Copyright (c) 2023 by xiezexuan, All Rights Reserved.
 */
import store from '@/store'
export default {
  methods: {
    checkPermission(key) {
      const { userInfo } = store.state.user
      if (userInfo.roles.points && userInfo.roles.points.length) {
        return userInfo.roles.points.some(item => item === key)
      }
      return false
    }
  }
}
