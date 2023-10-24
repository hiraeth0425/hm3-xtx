import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore(
  'xtx-user',
  () => {
    // token
    const token = ref('')
    // 儲存token
    const setToken = (newToken) => {
      token.value = newToken
    }
    // 移除token
    const removeToken = () => {
      token.value = ''
    }

    // 儲存商品分類列表
    const categoryList = ref([])

    return {
      token,
      setToken,
      removeToken,
      categoryList
    }
  },
  {
    persist: true
  }
)
