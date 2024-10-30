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
  <template v-if="link">
    <template v-if="useVueRouter">
      <RouterLink v-bind:to="link" class="pure-menu-heading pure-menu-link">
        <slot></slot>
      </RouterLink>
    </template>
    <template v-else>
      <a v-bind:href="link" class="pure-menu-heading pure-menu-link">
        <slot></slot>
      </a>
    </template>
  </template>
  <template v-else>
    <span class="pure-menu-heading">
      <slot></slot>
    </span>
  </template>
</template>

<style scoped></style>
