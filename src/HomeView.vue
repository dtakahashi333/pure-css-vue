<script setup></script>

<template>
  <div class="content">
    <div>
      <h1 class="title">Vue Pure.CSS</h1>
      <p class="welcome">Vue Components with Pure.CSS Styling</p>
    </div>
  </div>
</template>

<style scoped>
.welcome {
  color: #666;
  font-size: 150%;
  font-weight: 200;
  line-height: 1.5;
}
@media screen and (min-width: 48em) {
  .welcome {
    font-size: 220%;
  }
}
</style>
