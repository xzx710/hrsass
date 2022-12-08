export const imageerror = {
  inserted(dom, options) {
    dom.onerror = function() {
      dom.src = options.value // 这里不能写死
    }
  }
}
