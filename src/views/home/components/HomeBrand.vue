<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import HomePanel from './HomePanel.vue'
import { getBrandService } from '@/api/layout.js'

// 獲取熱門品牌數據
const brandList = ref({})
onMounted(async () => {
  const res = await getBrandService()
  //   console.log(res.data.result)
  brandList.value = res.data.result.splice(0, 5)
})
</script>

<template>
  <HomePanel title="熱門品牌" subTitle="国际经典 品质保证"></HomePanel>
  <!-- 熱門品牌 -->
  <div class="hotBox">
    <ul v-for="item in brandList" :key="item.id">
      <li><img v-img-lazy="item.picture" /></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.hotBox {
  width: 1240px;
  height: 345px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  ul {
    // display: flex;
    li {
      //   display: flex;
      width: 240px;
      height: 305px;
      // background-color: pink;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
