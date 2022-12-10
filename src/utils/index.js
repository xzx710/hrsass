/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

/**
 * 将扁平化部门数组转化成树形部门数组
 * @typedef {Object} OldDepartment - 扁平化部门
 * @property {String} id - 部门id
 * @property {String} pid - 父部门id
 * @property {String} companyId - 公司id
 * @property {String} name - 部门名称
 * @property {String|Null} code - 公司id
 * @property {String|Null} managerId - 负责人id
 * @property {String|Null} manager - 负责人名字
 * @property {String|Null} introduce - 部门介绍
 * @property {Null} createTime - 部门创建时间
 * @typedef {Object} NewDepartment - 树形部门
 * @property {String} id - 部门id
 * @property {String} pid - 父部门id
 * @property {String} companyId - 公司id
 * @property {String} name - 部门名称
 * @property {String|Null} code - 公司id
 * @property {String|Null} managerId - 负责人id
 * @property {String|Null} manager - 负责人名字
 * @property {String|Null} introduce - 部门介绍
 * @property {Null} createTime - 部门创建时间
 * @property {Array<NewDepartment>} children - 子部门
 * @param {Array<OldDepartment>} departmentslist - 扁平化部门数据
 * @returns {Array<NewDepartment>}
 */
export function tranListToTreeData(departmentslist) {
  const departmentsMap = new Map()
  const treeDepartmentsArray = []

  departmentslist.forEach(department => {
    const id = department.id // 获取当前部门id
    const pid = department.pid // 获取父部门id
    // 判断当前部门是否已在map中
    if (!departmentsMap[id]) {
      departmentsMap[id] = { children: [] }
    }

    const departmentTreeItem = departmentsMap[id] = { ...department, children: departmentsMap[id]['children'] }

    // 判断是否是根级部门
    if (pid === '-1' || pid === '') {
      treeDepartmentsArray.push(departmentTreeItem)
    } else {
      // 判断父部门是否在map中
      if (!departmentsMap[pid]) {
        departmentsMap[pid] = { children: [] }
      }
      departmentsMap[pid].children.push(departmentTreeItem)
    }
  })
  return treeDepartmentsArray
}
