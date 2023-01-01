/*
 * @Author: xiezexuan
 * @Date: 2022-12-26 13:31:10
 * @LastEditors: xiezexuan
 * @LastEditTime: 2023-01-01 15:27:15
 * @Description:
 * Copyright (c) 2023 by xiezexuan, All Rights Reserved.
 */
import Layout from '@/layout'
export default {
  path: '/attendances',
  component: Layout,
  name: 'attendances',
  children: [{
    path: '',
    name: 'attendances',
    component: () => import('@/views/attendances/index'),
    meta: { title: '考勤', icon: 'skill' }
  }]
}
