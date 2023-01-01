/*
 * @Author: xiezexuan
 * @Date: 2023-01-01 14:23:38
 * @LastEditors: xiezexuan
 * @LastEditTime: 2023-01-01 15:19:47
 * @Description: vuex的权限模块
 * Copyright (c) 2023 by xiezexuan, All Rights Reserved.
 */
import { constantRoutes, asyncRoutes } from '@/router'
export default {
  namespaced: true,
  state: {
    routes: constantRoutes // 所有人默认拥有静态路由
  },
  mutations: {
    // newRoutes可以认为是 用户登录 通过权限所得到的动态路由的部分
    setRoutes(state, newRoutes) {
      state.routes = [...constantRoutes, ...newRoutes]
    }
  },
  actions: {
    // 筛选权限路由
    // menus: ["settings","permissions"]
    // asyncRoutes是所有的动态路由
    // asyncRoutes  [{path: 'setting',name: 'setting'},{}]
    filterRoutes(context, menus) {
      const routes = []
      //   筛选出 动态路由中和menus中能够对上的路由
      menus.forEach(key => {
        console.log(key)
        // asyncRoutes 找 有没有对象中的name属性等于 key的 如果找不到就没权限 如果找到了 要筛选出来
        routes.push(...asyncRoutes.filter(item => item.name === key))
      })
      context.commit('setRoutes', routes) // 将动态路由提交给mutations
      return routes // return给路由addRoutes用的
    }
  }
}
