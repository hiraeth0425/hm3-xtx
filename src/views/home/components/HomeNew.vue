<script setup>
import { ref } from 'vue'
import { getNewsService } from '@/api/layout.js'
import HomePanel from '../components/HomePanel.vue'
import { onMounted } from 'vue'

// 獲取新鮮好物分類
const newsList = ref([])
onMounted(async () => {
  const res = await getNewsService()
  // console.log(res.data.result)
  newsList.value = res.data.result
})
</script>

<template>
  <HomePanel title="新鮮好物" subTitle="新鲜出炉 品质靠谱">
    <template #default>
      <!-- 插槽slot -->
      <ul class="goods-list">
        <li v-for="item in newsList" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <p class="name">{{ item.name }}</p>
            <p class="price">&yen;{{ item.price }}</p>
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
