<script setup>
import HomeBanner from './components/HomeBanner.vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeHot from './components/HomeHot.vue'
import HomeNew from './components/HomeNew.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomeBrand from './components/HomeBrand.vue'
</script>

<template>
  <div style="margin: 0 auto; width: 1240px">
    <HomeCategory></HomeCategory>
    <HomeBanner></HomeBanner>
  </div>

  <div>
    <HomeNew></HomeNew>
    <HomeHot></HomeHot>
    <HomeBrand></HomeBrand>
    <HomeProduct></HomeProduct>
  </div>
</template>
