/*
 * @Author: xiezexuan
 * @Date: 2022-12-26 13:31:10
 * @LastEditors: xiezexuan
 * @LastEditTime: 2022-12-30 13:07:27
 * @Description:
 * Copyright (c) 2022 by xiezexuan, All Rights Reserved.
 */
import Layout from '@/layout'
export default {
  path: '/employees',
  component: Layout,
  children: [
    {
      path: '',
      name: 'Employees',
      component: () => import('@/views/employees/index'),
      meta: { title: '员工', icon: 'people' }
    },
    {
      path: 'detail/:id', // query传参 动态路由传参
      component: () => import('@/views/employees/detail'),
      hidden: true, // 不在左侧菜单显示
      meta: {
        title: '员工详情' // 标记当前路由规则的中文名称 后续在做左侧菜单时 使用
      }
    }
  ]
}
