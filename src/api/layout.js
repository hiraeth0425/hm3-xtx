import request from '@/utils/request.js'

// 獲取文章分類
export const getCategoryService = () => request.get('/home/category/head')

// 獲取輪播圖數據
export const getBannerService = (distributionSite) =>
  request.get('/home/banner', { params: { distributionSite } })

// 獲取新鮮好物分類
export const getNewsService = () => request.get('/home/new')

// 獲取人氣推薦
export const getRecommendService = () => request.get('/home/hot')

// 獲取熱門品牌
export const getBrandService = () => request.get('/home/brand')

// 獲取居家 產品區塊
export const getProductService = () => request.get('/home/goods')
