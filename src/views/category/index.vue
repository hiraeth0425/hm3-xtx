<script setup>
import { ref } from 'vue'
import { getSecCategoryService } from '@/api/category.js'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { getBannerService } from '@/api/layout.js'
import GoodsItem from '@/views/home/components/GoodsItem.vue'

const route = useRoute()
const SecCategoryList = ref({})
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

// 獲取輪播圖數據
const carousel = ref([])
const getCarousel = async () => {
  const distributionSite = '2' // 請求參數
  const res = await getBannerService(distributionSite)
  carousel.value = res.data.result
}
getCarousel()
</script>

<template>
  <!-- 麵包屑 -->
  <el-breadcrumb separator=">">
    <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
    <el-breadcrumb-item>{{ SecCategoryList.name }}</el-breadcrumb-item>
  </el-breadcrumb>
  <!-- 輪播圖 -->
  <div class="carouselBox">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in carousel" :key="item.id">
        <img :src="item.imgUrl" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <!-- 分類模板 -->
  <div class="sub-list">
    <h3>全部分类</h3>
    <ul>
      <li v-for="i in SecCategoryList.children" :key="i.id">
        <RouterLink to="/">
          <img :src="i.picture" />
          <p>{{ i.name }}</p>
        </RouterLink>
      </li>
    </ul>
  </div>
  <div
    class="ref-goods"
    v-for="item in SecCategoryList.children"
    :key="item.id"
  >
    <div class="head">
      <h3>- {{ item.name }}-</h3>
    </div>
    <div class="body">
      <GoodsItem v-for="goods in item.goods" :goods="goods" :key="goods.id" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.carouselBox {
  margin: 0 auto;
  // position: absolute;
  width: 1240px;
  // top: 185px;
  img {
    width: 100%;
    height: 100%;
  }
}

// 分類模板
.sub-list {
  margin: 20px auto;
  width: 1240px;
  height: 260px;
  background-color: #fff;
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: 400;
    text-align: center;
    line-height: 100px;
  }
  ul {
    text-align: center;
    justify-content: space-evenly;
    display: flex;
    width: 100%;
    height: 100px;
    li {
      width: 168px;
      height: 160px;
      img {
        width: 100px;
        height: 100px;
      }
      p {
        line-height: 40px;
      }
    }
  }
}
.ref-goods {
  margin: 20px auto;
  width: 1240px;
  height: 458px;
  background-color: #fff;
  .head {
    h3 {
      font-size: 28px;
      color: #666;
      font-weight: 400;
      text-align: center;
      line-height: 100px;
    }
  }
  .body {
    display: flex;
    justify-content: space-around;
  }
  .goods-item {
    display: block;
    width: 220px;
    padding: 20px 30px;
    text-align: center;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>
