<script setup>
import PureMenu from "./components/PureMenu.vue";
import PureMenuHeading from "./components/PureMenuHeading.vue";
import PureMenuItem from "./components/PureMenuItem.vue";
import PureMenuList from "./components/PureMenuList.vue";
import PureMenuListHasChildren from "./components/PureMenuListHasChildren.vue";
</script>

<template>
  <div class="content">
    <h1 class="content-subhead">Menu</h1>
    <section>
      <h2 class="content-subhead">Vertical Menu</h2>
      <PureMenu vertical restrictWidth>
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
      <PureMenu horizontal>
        <PureMenuList>
          <PureMenuItem selected>Home</PureMenuItem>
          <PureMenuListHasChildren useVueRouter>
            Contact
            <template v-slot:children>
              <PureMenuItem>Email</PureMenuItem>
              <PureMenuItem>Twitter</PureMenuItem>
              <PureMenuItem>Tumblr Blog</PureMenuItem>
            </template>
          </PureMenuListHasChildren>
        </PureMenuList>
      </PureMenu>
    </section>
    <section>
      <h2 class="content-subhead">Vertical Menu with Submenus</h2>
      <PureMenu vertical restrictWidth="150px">
        <PureMenuList>
          <PureMenuItem selected>Flickr</PureMenuItem>
          <PureMenuItem>Messenger</PureMenuItem>
          <PureMenuItem>Sports</PureMenuItem>
          <PureMenuItem>Finance</PureMenuItem>
          <PureMenuListHasChildren>
            More
            <template v-slot:children>
              <PureMenuItem>Autos</PureMenuItem>
              <PureMenuItem>Flickr</PureMenuItem>
              <PureMenuListHasChildren>
                Even More
                <template v-slot:children>
                  <PureMenuItem>Foo</PureMenuItem>
                  <PureMenuItem>Bar</PureMenuItem>
                  <PureMenuItem>Baz</PureMenuItem>
                </template>
              </PureMenuListHasChildren>
            </template>
          </PureMenuListHasChildren>
        </PureMenuList>
      </PureMenu>
    </section>
    <section>
      <h2 class="content-subhead">Scrollable Horizontal Menu</h2>
      <div class="hori-scrollable-container">
        <PureMenu horizontal scrollable>
          <PureMenuHeading>Yahoo Sites</PureMenuHeading>
          <PureMenuList>
            <PureMenuItem>Home</PureMenuItem>
            <PureMenuItem>Flickr</PureMenuItem>
            <PureMenuItem>Messenger</PureMenuItem>
            <PureMenuItem>Sports</PureMenuItem>
            <PureMenuItem>Finance</PureMenuItem>
            <PureMenuItem>Auto</PureMenuItem>
            <PureMenuItem>Beauty</PureMenuItem>
            <PureMenuItem>Movies</PureMenuItem>
            <PureMenuItem>Small Business</PureMenuItem>
            <PureMenuItem>Cricket</PureMenuItem>
            <PureMenuItem>Tech</PureMenuItem>
            <PureMenuItem>World</PureMenuItem>
            <PureMenuItem>News</PureMenuItem>
            <PureMenuItem>Support</PureMenuItem>
          </PureMenuList>
        </PureMenu>
      </div>
    </section>
    <section>
      <h2 class="content-subhead">Scrollable Horizontal Menu</h2>
      <PureMenu
        vertical
        scrollable
        restrictWidth="150px"
        restrictHeight="160px"
      >
        <PureMenuHeading>Yahoo Sites</PureMenuHeading>
        <PureMenuList>
          <PureMenuItem>Home</PureMenuItem>
          <PureMenuItem>Flickr</PureMenuItem>
          <PureMenuItem>Messenger</PureMenuItem>
          <PureMenuItem>Sports</PureMenuItem>
          <PureMenuItem>Finance</PureMenuItem>
          <PureMenuItem>Auto</PureMenuItem>
          <PureMenuItem>Beauty</PureMenuItem>
          <PureMenuItem>Movies</PureMenuItem>
          <PureMenuItem>Small Business</PureMenuItem>
          <PureMenuItem>Cricket</PureMenuItem>
          <PureMenuItem>Tech</PureMenuItem>
          <PureMenuItem>World</PureMenuItem>
          <PureMenuItem>News</PureMenuItem>
          <PureMenuItem>Support</PureMenuItem>
        </PureMenuList>
      </PureMenu>
    </section>
  </div>
</template>

<style scoped>
.hori-scrollable-container {
  width: 768px;
}
</style>
