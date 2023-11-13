<script setup lang="ts">
import { ref } from 'vue'
import ServerButton from './ServerButton.vue'
const servers = ref([
  {
    name: 'M'
  },
  {
    name: 'S1'
  },
  {
    name: 'S2'
  },
  {
    name: 'S3'
  }
])
</script>

<template>
  <div class="fixed left-0 top-0 w-20 bg-[#1e2124] h-full">
    <div class="pt-6 flex flex-col items-center">
      <ServerButton name="@me" image-url="discord.png" id="1" />
      <ul class="pt-4">
        <li v-for="server in servers" :key="server.name">
          {{ server.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
