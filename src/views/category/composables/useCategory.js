// 封裝分類數據相關代碼
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { ref } from 'vue'
import { getSecCategoryService } from '@/api/category.js'

export function useCategory() {
  const SecCategoryList = ref({})
  const route = useRoute()

  const getCategoryList = async (id = route.params.id) => {
    const res = await getSecCategoryService(id)
    SecCategoryList.value = res.data.result
    // console.log(SecCategoryList.value)
  }
  getCategoryList()

  // 目標: 路由參數變化時, 可以把分類數據接口重新發送
  onBeforeRouteUpdate((to) => {
    // console.log('路由變化了')
    // 存在問題: 使用最新的路由參數請求最新的分類數據
    // console.log(to.params.id)
    getCategoryList(to.params.id)
  })

  // 測試watchEffect
  // watchEffect(() => {
  //   getCategoryList()
  // })

  return {
    SecCategoryList
  }
}
