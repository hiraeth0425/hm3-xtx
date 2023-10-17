import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'xtx-user',
  () => {
    // 聲明數據
    const token = ref('')
    // 聲明操作數據的方法
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    return {
      token,
      setToken,
      removeToken
    }
  },
  {
    persist: true
  }
)
