/*
 * @Author: xiezexuan
 * @Date: 2022-12-26 13:31:10
 * @LastEditors: xiezexuan
 * @LastEditTime: 2023-01-01 15:18:46
 * @Description:
 * Copyright (c) 2023 by xiezexuan, All Rights Reserved.
 */
import Layout from '@/layout'
export default {
  path: '/salarys',
  component: Layout,
  name: 'salarys',
  children: [{
    path: '',
    name: 'salarys',
    component: () => import('@/views/salarys/index'),
    meta: { title: '工资', icon: 'money' }
  }]
}
