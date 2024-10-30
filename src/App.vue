<script setup>
import { RouterView } from "vue-router";
import PureMenu from "./components/PureMenu.vue";
import MenuItem from "./components/MenuItem.js";
import PureMenuItem from "./components/PureMenuItem.vue";
import PureMenuHeading from "./components/PureMenuHeading.vue";
import PureMenuList from "./components/PureMenuList.vue";

const menuHeading = new MenuItem("PURE", { name: "home" }, true);
const menuItems = [
  new MenuItem("Buttons", { name: "buttons" }, true),
  new MenuItem("Forms", { name: "forms" }, true),
];
</script>

<template>
  <div class="container">
    <nav class="sidenav">
      <PureMenu>
        <PureMenuHeading :useVueRouter="true" :link="{ name: 'home' }"
          >Pure</PureMenuHeading
        >
        <PureMenuList>
          <PureMenuItem :useVueRouter="true" :link="{ name: 'buttons' }">
            Buttons
          </PureMenuItem>
          <PureMenuItem :useVueRouter="true" :link="{ name: 'forms' }">
            Forms
          </PureMenuItem>
          <PureMenuItem :useVueRouter="true" :link="{ name: 'menus' }">
            Menus
          </PureMenuItem>
        </PureMenuList>
      </PureMenu>
      <!-- <PureMenu :menuHeading="menuHeading" :menuItems="menuItems" /> -->
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
}

.sidenav {
  width: 150px;
  height: 100%;
}
</style>

<style>
.content {
  width: 90%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 32px;
}

.content .content-subhead {
  color: #888;
  font-weight: 300;
  margin: 2em 0 1em;
  position: relative;
}

.code {
  border-color: #eee;
  border-style: solid;
  border-width: 1px 0;
  margin-left: -1em;
  margin-right: -1em;
  overflow-x: auto;
}
</style>
