<script setup>
import { ref } from "vue";
const props = defineProps({
  useVueRouter: {
    type: [Boolean, String],
    default: false,
  },
  link: {
    type: [String, Object],
    default: "#/", // https://stackoverflow.com/questions/3252730/how-can-i-prevent-a-click-on-a-link-from-jumping-to-top-of-page
  },
  allowHover: {
    type: [Boolean, String],
    default: false,
  },
  disabled: {
    type: [Boolean, String],
    default: false,
  },
});
const isChildrenOpen = ref(false);
</script>

<template>
  <li
    class="pure-menu-item pure-menu-has-children"
    v-bind:class="{
      'pure-menu-allow-hover': allowHover,
      'pure-menu-disabled': disabled,
    }"
  >
    <template v-if="useVueRouter">
      <RouterLink
        v-bind:to="link"
        class="pure-menu-link"
        v-on:click="isChildrenOpen = !isChildrenOpen"
        aria-haspopup="true"
      >
        <slot></slot>
      </RouterLink>
    </template>
    <template v-else>
      <a
        v-bind:href="link"
        class="pure-menu-link"
        v-on:click="isChildrenOpen = !isChildrenOpen"
        aria-haspopup="true"
      >
        <slot></slot>
      </a>
    </template>
    <ul
      class="pure-menu-children"
      v-bind:class="{
        'open-children': isChildrenOpen,
      }"
    >
      <slot name="children"></slot>
    </ul>
  </li>
</template>

<style scoped>
.open-children {
  display: block !important;
}
</style>
