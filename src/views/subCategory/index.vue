<script setup>
import { ref } from 'vue'
import { getSubFilterService, getCategoryService } from '@/api/category.js'
import { useRoute } from 'vue-router'
import GoodsItem from '@/views/home/components/GoodsItem.vue'

const route = useRoute()
// 二級分類列表數據
const subFilterList = ref({})
const getSubFilterList = async () => {
  const res = await getSubFilterService(route.params.id)
  subFilterList.value = res.data.result
}
getSubFilterList()

// 二級基礎商品列表實現
const subCategoryList = ref([])
const SubCategoryData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const getSubCategoryList = async () => {
  const res = await getCategoryService(SubCategoryData)
  // console.log(res.data.result.items)
  subCategoryList.value = res.data.result.items
  // console.log(subCategoryList.value)
}
getSubCategoryList()

// Tab切換了 重新發送請求
const onTabChange = () => {
  // console.log(SubCategoryData.value.sortField)
  SubCategoryData.value.page = 1
  getSubCategoryList()
}

// 無限滾動
const disabled = ref(false)
const load = async () => {
  console.log('加載更多數據')
  SubCategoryData.value.page++
  const res = await getCategoryService(SubCategoryData.value)
  // console.log(res.data.result.items)
  subCategoryList.value = [...subCategoryList.value, ...res.data.result.items]
  if (res.data.result.items.length === 0) {
    disabled.value = true
  }
}
</script>

<template>
  <div class="container">
    <!-- 麵包屑 -->
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item
        :to="{ path: `/category/${subFilterList.parentId}` }"
        >{{ subFilterList.parentName }}</el-breadcrumb-item
      >
      <el-breadcrumb-item>{{ subFilterList.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <!-- 表格 -->
  <div class="sub-container">
    <el-tabs
      v-model="SubCategoryData.sortField"
      type="card"
      @tab-change="onTabChange"
    >
      <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
      <el-tab-pane label="最新人氣" name="orderNum"></el-tab-pane>
      <el-tab-pane label="評論最多" name="evaluateNum"></el-tab-pane>
    </el-tabs>
    <div
      class="body"
      v-infinite-scroll="load"
      :infinite-scroll-disabled="disabled"
    >
      <!-- 商品列表 -->
      <GoodsItem
        v-for="goods in subCategoryList"
        :key="goods.id"
        :goods="goods"
      ></GoodsItem>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  display: flex;
  flex-wrap: wrap;
}
.container {
  padding: 25px 10px;
}
.sub-container {
  width: 1240px;
  height: 100%;
  margin: 0 auto;
  padding: 25px;
  background-color: #fff;
}
</style>
