<template>
  <NuxtLink
    class="h-[186px] w-[186px]"
    :to="to"
  >
    <!-- Product image -->
    <div class="h-full w-full bg-gray-300">
      <NuxtImg
        width="full"
        height="full"
        :src="image"
      >

      </NuxtImg>
    </div>
    <!-- Product name-->
    <div class="mt-[10px]">
      <p>{{ name }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { defineProps } from "vue"

defineProps({
  to: {
    type: String,
    required: true,
    default: "\n"
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
</script>