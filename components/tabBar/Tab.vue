<template>
  <NuxtLink
    class="w-[90px] flex justify-center py-[8px]"
    :to="to"
  >
    <div>
      <div :class="`flex justify-center transition-all duration-300 ${TabBar.activeRoute.value == to ? 'opacity-100 ' : 'opacity-70'}`">
        <component
          :class="`transition-all duration-300 ${TabBar.activeRoute.value == to ? 'stroke-[#4b7af1] ' : 'stroke-black'}`"
          :is="icon"
        />
      </div>
      <div :class="`pt-[5px] text-[12px] transition-all duration-300 ${TabBar.activeRoute.value == to ? 'font-bold' : 'font-normal'}`">
        <p>{{ text }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
import { TabBar } from "~/compostables/TabBar"

defineProps({
  to: {
    type: String,
    required: true,
    default: "\n"
  },
  text: {
    type: String,
    required: true
  },
  icon: {
    type: Object,
    required: true
  }
});
</script>