<script setup>
import PureButton from "./components/PureButton.vue";
</script>

<template>
  <main>
    <div class="content">
      <section>
        <h2 class="content-subhead">Default Button</h2>
        <PureButton>A Pure Button</PureButton>
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
        <h2 class="content-subhead">Colored Buttons</h2>
        <div>
          <PureButton color="success">Buccess Button</PureButton>
          <PureButton color="error" style="margin-left: 8px;">Buccess Button</PureButton>
          <PureButton color="warning" style="margin-left: 8px;">Buccess Button</PureButton>
          <PureButton color="secondary" style="margin-left: 8px;">Buccess Button</PureButton>
        </div>
      </section>
      <section>
        <h2 class="content-subhead">Colored Buttons with Rounded Corner</h2>
        <div>
          <PureButton color="success" rounded>Buccess Button</PureButton>
          <PureButton color="error" rounded style="margin-left: 8px;">Buccess Button</PureButton>
          <PureButton color="warning" rounded style="margin-left: 8px;">Buccess Button</PureButton>
          <PureButton color="secondary" rounded style="margin-left: 8px;">Buccess Button</PureButton>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.content {
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 24px;
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
