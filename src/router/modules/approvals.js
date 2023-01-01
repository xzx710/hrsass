/*
 * @Author: xiezexuan
 * @Date: 2022-12-26 13:31:10
 * @LastEditors: xiezexuan
 * @LastEditTime: 2023-01-01 15:25:02
 * @Description:
 * Copyright (c) 2023 by xiezexuan, All Rights Reserved.
 */
import Layout from '@/layout'

export default {
  path: '/approvals',
  component: Layout,
  name: 'approvals',
  children: [
    {
      path: '',
      component: () => import('@/views/approvals'),
      name: 'approvals',
      meta: {
        title: '审批',
        icon: 'tree-table'
      }
    }
  ]
}

