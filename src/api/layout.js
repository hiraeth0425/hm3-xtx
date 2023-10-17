import request from '@/utils/request.js'

// 獲取文章分類
export const getCategoryService = () => request.get('/home/category/head')
