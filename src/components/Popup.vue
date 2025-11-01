<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    default: 'title'
  }
})
</script>

<template>
  <div>
    <button>Close</button>
    <p>{{ props.title }}</p>
    <button>Confirm</button>
    <span> | </span>
    <button>Cancel</button>
  </div>
</template>