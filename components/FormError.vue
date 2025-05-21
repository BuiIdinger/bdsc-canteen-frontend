<template>
  <div class="flex gap-x-[8px] fill-red-700 text-red-700 items-center">
    <!-- Icon -->
    <div>
      <IconsWarning class="h-[20px] w-[20px]" />
    </div>

    <!-- Text -->
    <div class="font-medium">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
    default: "NULL"
  },
});
</script>