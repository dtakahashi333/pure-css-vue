<script setup>
import PureButton from "./components/PureButton.vue";
import PureButtonGroup from "./components/PureButtonGroup.vue";
const hello = () => {
  alert("Hello");
};
</script>

<template>
  <main>
    <div class="content">
      <section>
        <h2 class="content-subhead">Default Button</h2>
        <PureButton v-on:click="hello">A Pure Button</PureButton>
      </section>
      <section>
        <h2 class="content-subhead">Disabled Button</h2>
        <PureButton disabled>A Disabled Button</PureButton>
      </section>
      <section>
        <h2 class="content-subhead">Active Button</h2>
        <PureButton active>An Active Button</PureButton>
      </section>
      <section>
        <h2 class="content-subhead">Primary Button</h2>
        <PureButton color="primary">A Primary Button</PureButton>
      </section>
      <section>
        <h3 class="content-subhead">Colored Buttons</h3>
        <div>
          <PureButton color="success">Buccess Button</PureButton>
          <PureButton color="error" style="margin-left: 8px"
            >Buccess Button</PureButton
          >
          <PureButton color="warning" style="margin-left: 8px"
            >Buccess Button</PureButton
          >
          <PureButton color="secondary" style="margin-left: 8px"
            >Buccess Button</PureButton
          >
        </div>
      </section>
      <section>
        <h3 class="content-subhead">Colored Buttons with Rounded Corners</h3>
        <div>
          <PureButton color="success" rounded>Buccess Button</PureButton>
          <PureButton color="error" rounded style="margin-left: 8px"
            >Buccess Button</PureButton
          >
          <PureButton color="warning" rounded style="margin-left: 8px"
            >Buccess Button</PureButton
          >
          <PureButton color="secondary" rounded style="margin-left: 8px"
            >Buccess Button</PureButton
          >
        </div>
      </section>
      <section>
        <h3 class="content-subhead">Colored Buttons with Different Sizes</h3>
        <div>
          <PureButton size="xsmall">Extra Small Button</PureButton>
          <PureButton size="small" style="margin-left: 8px"
            >Small Button</PureButton
          >
          <PureButton style="margin-left: 8px">Regular Button</PureButton>
          <PureButton size="large" style="margin-left: 8px"
            >Large Button</PureButton
          >
          <PureButton size="xlarge" style="margin-left: 8px"
            >Extra Large Button</PureButton
          >
        </div>
      </section>
      <section style="padding-bottom: 32px;">
        <h2 class="content-subhead">Button Groups</h2>
        <div>
          <PureButtonGroup>
            <PureButton>A Pure Button 1</PureButton>
            <PureButton>A Pure Button 2</PureButton>
            <PureButton active>An Active Button</PureButton>
          </PureButtonGroup>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
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
