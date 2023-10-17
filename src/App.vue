<script setup></script>
<template>
  <!-- 一級路由出口 -->
  <router-view></router-view>
  <div class="test">test scss</div>
</template>

<style scoped lang="scss">
.test {
  color: $xtxColor;
}
</style>
