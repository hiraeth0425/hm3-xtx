<script setup>
import { ref } from 'vue'
import { getBannerService } from '@/api/layout.js'

// 獲取輪播圖數據
const carousel = ref([])
const getCarousel = async () => {
  const res = await getBannerService()
  carousel.value = res.data.result
}
getCarousel()
</script>

<template>
  <div class="carouselBox">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in carousel" :key="item.id">
        <img :src="item.imgUrl" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.carouselBox {
  position: absolute;
  width: 1240px;
  top: 185px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
```
