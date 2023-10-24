<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import HomePanel from './HomePanel.vue'
import { getRecommendService } from '@/api/layout.js'

// 獲取人氣推薦
const recommendList = ref([])
onMounted(async () => {
  const res = await getRecommendService()
  // console.log(res.data.result)
  recommendList.value = res.data.result
})
</script>

<template>
  <HomePanel title="人氣推薦" subTitle="人气爆款 不容错过">
    <template #default>
      <ul class="goods-list">
        <li v-for="item in recommendList" :key="item.id">
          <RouterLink to="/">
            <img v-img-lazy="item.picture" alt="" />
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
    </template>
  </HomePanel>
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
