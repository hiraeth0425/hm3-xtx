// 封裝輪播圖相關代碼
import { ref } from 'vue'
import { getBannerService } from '@/api/layout.js'

export function useBanner() {
  // 獲取輪播圖數據
  const carousel = ref([])

  const getCarousel = async () => {
    const distributionSite = '2' // 請求參數
    const res = await getBannerService(distributionSite)
    carousel.value = res.data.result
  }
  getCarousel()

  return {
    carousel
  }
}
