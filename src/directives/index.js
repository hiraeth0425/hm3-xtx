// 定義懶加載組件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    // 使用app實現懶加載指令邏輯
    // 定義全局指令
    app.directive('img-lazy', (el, binding) => {
      //   console.log(el, binding)
      // 獲取視口範圍
      const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
        // console.log(isIntersecting)
        if (isIntersecting) {
          // console.log(isIntersecting)
          el.src = binding.value
          stop()
        }
      })
    })
  }
}
