import request from '@/utils/request'

// 獲取二級分類列表
export const getSecCategoryService = (id) =>
  request.get('/category', {
    params: { id }
  })
