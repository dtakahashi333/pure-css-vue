<script setup>
const props = defineProps({
  useVueRouter: {
    type: Boolean,
    default: false,
  },
  link: {
    type: [String, Object],
    default: "",
  },
});
</script>

<template>
  <template v-if="useVueRouter">
    <RouterLink v-bind:to="link" class="pure-menu-heading">
      <slot></slot>
    </RouterLink>
  </template>
  <template v-else>
    <a v-bind:href="link" class="pure-menu-heading">
      <slot></slot>
    </a>
  </template>
</template>

<style scoped></style>
