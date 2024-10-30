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
  horizontal: {
    type: [Boolean, String],
    default: false,
  },
});
</script>

<template>
  <div class="pure-menu" v-bind:class="{ 'pure-menu-horizontal': horizontal }">
    <template v-if="menuHeading || menuItems">
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
      <template v-if="menuItems">
        <ul class="pure-menu-list">
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
        </ul>
      </template>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<style scoped></style>
