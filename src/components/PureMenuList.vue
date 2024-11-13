<script setup>
const props = defineProps({
  useVueRouter: {
    type: [Boolean, String],
    default: false,
  },
});
</script>

<template>
  <ul class="pure-menu-list">
    <slot></slot>
  </ul>
</template>

<style scoped></style>
