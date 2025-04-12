<template>
  <div class="child">
    <slot name="header" />
    <div class="content">
      <p>This is the child component content</p>
    </div>
    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
.child {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px;
}

.content {
  margin: 20px 0;
}
</style> 