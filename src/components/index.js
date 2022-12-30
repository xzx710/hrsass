/*
 * @Author: xiezexuan
 * @Date: 2022-12-26 13:37:59
 * @LastEditors: xiezexuan
 * @LastEditTime: 2022-12-30 12:42:58
 * @Description:负责所有的公共的组件的全局注册
 * Copyright (c) 2022 by xiezexuan, All Rights Reserved.
 */
import PageTools from './PageTools'
import UploadExcel from './UploadExcel'
export default {
  install(Vue) {
    Vue.component('PageTools', PageTools)// 注册工具栏组件
    Vue.component('UploadExcel', UploadExcel) // 注册导入excel组件
  }
}
