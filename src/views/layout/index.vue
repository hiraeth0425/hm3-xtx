<script setup>
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<template>
  layout
  <LayoutHeader></LayoutHeader>
  <LayoutNav></LayoutNav>
  <router-view></router-view>
  <LayoutFooter></LayoutFooter>
</template>
