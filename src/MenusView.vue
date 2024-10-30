<script setup>
import PureMenu from "./components/PureMenu.vue";
import PureMenuHeading from "./components/PureMenuHeading.vue";
import PureMenuItem from "./components/PureMenuItem.vue";
import PureMenuList from "./components/PureMenuList.vue";
</script>

<template>
  <div class="content">
    <h1 class="content-subhead">Menu</h1>
    <section>
      <h2 class="content-subhead">Vertical Menu</h2>
      <PureMenu>
        <PureMenuHeading>Yahoo Sites</PureMenuHeading>
        <PureMenuList>
          <PureMenuItem>Flickr</PureMenuItem>
          <PureMenuItem>Messenger</PureMenuItem>
          <PureMenuItem>Sports</PureMenuItem>
          <PureMenuItem>Finance</PureMenuItem>
        </PureMenuList>
        <PureMenuHeading>More Sites</PureMenuHeading>
        <PureMenuList>
          <PureMenuItem>Games</PureMenuItem>
          <PureMenuItem>News</PureMenuItem>
          <PureMenuItem>OMG!</PureMenuItem>
        </PureMenuList>
      </PureMenu>
    </section>
    <section>
      <h2 class="content-subhead">Horizontal Menu</h2>
      <PureMenu horizontal>
        <PureMenuHeading link="#">Brand</PureMenuHeading>
        <PureMenuList>
          <PureMenuItem>News</PureMenuItem>
          <PureMenuItem>Sports</PureMenuItem>
          <PureMenuItem>Finance</PureMenuItem>
        </PureMenuList>
      </PureMenu>
    </section>
    <section>
      <h2 class="content-subhead">Selected and Disabled Items</h2>
      <PureMenu horizontal>
        <PureMenuList>
          <PureMenuItem selected>Selected</PureMenuItem>
          <PureMenuItem>Normal</PureMenuItem>
          <PureMenuItem disabled>Disabled</PureMenuItem>
        </PureMenuList>
      </PureMenu>
    </section>
    <section>
      <h2 class="content-subhead">Dropdowns</h2>
    </section>
  </div>
</template>

<style scoped></style>
