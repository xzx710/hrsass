import Layout from '@/layout'
export default {
  path: '/setting',
  component: Layout,
  name: 'settings',
  children: [{
    path: '',
    name: 'setting',
    component: () => import('@/views/setting/index'),
    meta: { title: '公司设置', icon: 'setting' }
  }]
}
