/*
 * @Author: xiezexuan
 * @Date: 2022-12-26 13:37:59
 * @LastEditors: xiezexuan
 * @LastEditTime: 2022-12-26 13:38:06
 * @Description:负责所有的公共的组件的全局注册
 * Copyright (c) 2022 by xiezexuan, All Rights Reserved.
 */
import PageTools from './PageTools'
export default {
  install(Vue) {
    //  注册全局的通用栏组件对象
    Vue.component('PageTools', PageTools)
  }
}
