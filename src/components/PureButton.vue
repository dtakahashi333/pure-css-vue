<script setup>
import { reactive } from "vue";

const props = defineProps({
  disabled: {
    type: [Boolean, String],
    default: false,
  },
  active: {
    type: [Boolean, String],
    default: false,
  },
  color: {
    type: String,
    default: "",
  },
  rounded: {
    type: [Boolean, String],
    default: false,
  },
});
// https://vuejs.org/guide/essentials/class-and-style
const classObject = reactive({
  "pure-button-active": props.active,
  "pure-button-primary": props.color === "primary",
  "button-success": props.color === "success",
  "button-error": props.color === "error",
  "button-warning": props.color === "warning",
  "button-secondary": props.color === "secondary",
  "button-rounded": props.rounded
});
</script>

<template>
  <button
    class="pure-button"
    v-bind:class="classObject"
    v-bind:disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.button-success,
.button-error,
.button-warning,
.button-secondary {
  color: white;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.button-success {
  background: rgb(28, 184, 65);
  /* this is a green */
}

.button-error {
  background: rgb(202, 60, 60);
  /* this is a maroon */
}

.button-warning {
  background: rgb(223, 117, 20);
  /* this is an orange */
}

.button-secondary {
  background: rgb(66, 184, 221);
  /* this is a light blue */
}

.button-rounded {
  border-radius: 4px;
}
</style>
