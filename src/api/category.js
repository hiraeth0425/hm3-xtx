import request from '@/utils/request'

// 獲取二級分類列表
export const getSecCategoryService = (id) =>
  request.get('/category', {
    params: { id }
  })

// 二級分類列表數據
export const getSubFilterService = (id) =>
  request.get('/category/sub/filter', { params: { id } })

// 二級基礎商品列表實現
/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getCategoryService = (data) =>
  request.post('/category/goods/temporary', data)
