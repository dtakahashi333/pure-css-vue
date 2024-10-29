<script setup>
import MenuItem from "./MenuItem.js";

const props = defineProps({
  menuHeading: {
    type: MenuItem,
    default: null,
  },
  menuItems: {
    type: Array,
    default: null,
  },
});
</script>

<template>
  <div class="pure-menu">
    <template v-if="menuHeading">
      <template v-if="menuHeading.useVueRouter">
        <RouterLink v-bind:to="menuHeading.link" class="pure-menu-heading">{{
          menuHeading.title
        }}</RouterLink>
      </template>
      <template v-else>
        <a v-bind:href="menuHeading.link" class="pure-menu-heading">{{
          menuHeading.title
        }}</a>
      </template>
    </template>
    <template v-else>
      <slot name="heading"></slot>
    </template>
    <ul class="pure-menu-list">
      <template v-if="menuItems">
        <li v-for="item in menuItems" class="pure-menu-item">
          <template v-if="item.useVueRouter">
            <RouterLink v-bind:to="item.link" class="pure-menu-link">{{
              item.title
            }}</RouterLink>
          </template>
          <template v-else>
            <a v-bind:href="item.link" class="pure-menu-link">{{
              item.title
            }}</a>
          </template>
        </li>
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>
