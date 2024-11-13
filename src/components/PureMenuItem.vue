<script setup>
const props = defineProps({
  useVueRouter: {
    type: [Boolean, String],
    default: false,
  },
  link: {
    type: [String, Object],
    default: "#/", // https://stackoverflow.com/questions/3252730/how-can-i-prevent-a-click-on-a-link-from-jumping-to-top-of-page
  },
  selected: {
    type: [Boolean, String],
    default: false,
  },
  disabled: {
    type: [Boolean, String],
    default: false,
  },
});
</script>

<template>
  <li
    class="pure-menu-item"
    v-bind:class="{
      'pure-menu-selected': selected,
      'pure-menu-disabled': disabled,
    }"
  >
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
