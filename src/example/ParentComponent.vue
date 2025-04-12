<template>
  <div class="parent">
    <ChildComponent>
      <slot-tunnel name="header" />
      <slot-tunnel name="footer" />
    </ChildComponent>
  </div>
</template>

<script setup lang="ts">
import ChildComponent from './ChildComponent.vue';
</script>

<style scoped>
.parent {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
}
</style> 