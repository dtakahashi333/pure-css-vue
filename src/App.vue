<script setup>
import { RouterLink, RouterView } from "vue-router";
import PureMenu from "./components/PureMenu.vue";
import PureMenuItem from "./components/PureMenuItem.vue";
</script>

<template>
  <div class="container">
    <nav class="sidenav">
      <section class="pure-menu">
        <RouterLink :to="{ name: 'home' }" class="pure-menu-heading"
          >PURE</RouterLink
        >
        <ul class="pure-menu-list">
          <li class="pure-menu-item">
            <RouterLink :to="{ name: 'buttons' }" class="pure-menu-link"
              >Buttons</RouterLink
            >
          </li>
          <li class="pure-menu-item">
            <RouterLink :to="{ name: 'forms' }" class="pure-menu-link"
              >Forms</RouterLink
            >
          </li>
        </ul>
      </section>
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
