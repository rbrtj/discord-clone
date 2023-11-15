<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  content: string
}>()

const isVisible = ref(false)
const showTooltip = () => {
  isVisible.value = true
}
const hideTooltip = () => {
  isVisible.value = false
}
</script>

<template>
  <div class="relative inline-block" @mouseover="showTooltip" @mouseleave="hideTooltip">
    <slot></slot>
    <div
      v-if="isVisible"
      class="bg-primary-darkest text-white p-2 rounded-md absolute left-20 top-0 mt-2"
    >
      {content}
    </div>
  </div>
</template>
