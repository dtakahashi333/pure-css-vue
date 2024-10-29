<script setup>
const props = defineProps({
  useVueRouter: {
    type: [Boolean, String],
    default: false,
  },
  link: {
    type: [String, Object],
    default: "",
  },
});
</script>

<template>
  <li class="pure-menu-item">
    <template v-if="useVueRouter">
      <RouterLink v-bind:to="link" class="pure-menu-link">
        <slot></slot>
      </RouterLink>
    </template>
    <template v-else>
      <a v-bind:href="link" class="pure-menu-link">
        <slot></slot>
      </a>
    </template>
  </li>
</template>

<style scoped></style>
