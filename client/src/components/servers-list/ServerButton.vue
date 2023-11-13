<script setup lang="ts">
import ActionTooltip from '../ui/ActionTooltip.vue'

defineProps<{
  imageUrl: string
  name: string
  id: string
}>()
const onClick = () => {
  console.log('clicked')
}
console.log(name)
</script>

<template>
  <ActionTooltip :content="name">
    <button :click="onClick" class="relative flex items-center">
      <div
        class="relative flex mx-3 h-[48px] w-[48px] rounded-[24px] transition-all overflow-hidden"
      >
        <img :src="imageUrl" alt="Channel" />
      </div>
    </button>
  </ActionTooltip>
</template>
