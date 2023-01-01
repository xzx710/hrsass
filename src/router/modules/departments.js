/*
 * @Author: xiezexuan
 * @Date: 2022-12-26 13:31:10
 * @LastEditors: xiezexuan
 * @LastEditTime: 2023-01-01 15:27:36
 * @Description:
 * Copyright (c) 2023 by xiezexuan, All Rights Reserved.
 */
import Layout from '@/layout'
export default {
  path: '/departments',
  component: Layout,
  name: 'departments',
  children: [{
    path: '',
    name: 'departments',
    component: () => import('@/views/departments/index'),
    meta: { title: '组织架构', icon: 'tree' }
  }]
}
