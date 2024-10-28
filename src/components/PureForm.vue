<script setup>
import { reactive } from "vue";

const props = defineProps({
  stacked: {
    type: [Boolean, String],
    default: false,
  },
  aligned: {
    type: [Boolean, String],
    default: false,
  },
});
const classObjects = reactive({
  "pure-form-stacked": props.stacked,
  "pure-form-aligned": props.aligned,
});
</script>

<template>
  <form class="pure-form" v-bind:class="classObjects">
    <slot></slot>
  </form>
</template>

<style scoped></style>
