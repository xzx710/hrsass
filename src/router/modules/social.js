/*
 * @Author: xiezexuan
 * @Date: 2022-12-26 13:31:10
 * @LastEditors: xiezexuan
 * @LastEditTime: 2023-01-01 15:28:36
 * @Description:
 * Copyright (c) 2023 by xiezexuan, All Rights Reserved.
 */
import Layout from '@/layout'
export default {
  path: '/social',
  component: Layout,
  name: 'social_securitys',
  children: [{
    path: '',
    name: 'social',
    component: () => import('@/views/social/index'),
    meta: { title: '社保', icon: 'table' }
  }]
}
