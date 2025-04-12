<template>
  <div class="app">
    <ParentComponent>
      <template #tunnel-header>
        <h1>This is a tunneled header!</h1>
      </template>
      <template #tunnel-footer>
        <footer>This is a tunneled footer!</footer>
      </template>
    </ParentComponent>
  </div>
</template>

<script setup lang="ts">
import ParentComponent from './ParentComponent.vue';
</script>

<style scoped>
.app {
  padding: 20px;
}
</style> 