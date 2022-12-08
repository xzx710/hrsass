import Layout from '@/layout'
export default {
  path: '/employees',
  component: Layout,
  children: [{
    path: '',
    name: 'Employees',
    component: () => import('@/views/employees/index'),
    meta: { title: '员工', icon: 'people' }
  }]
}
