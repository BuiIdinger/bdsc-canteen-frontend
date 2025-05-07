<template>
  <div class="w-full max-w-lg mx-auto">
    <div class="bg-gray-200 w-full h-[4px] rounded-full">
      <div
        class="h-[4px] bg-black rounded-full"
        :style="{ width: `${percentage}%` }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const percentage = ref<number>(1);

onMounted(() => {
  const interval = setInterval(() => {
    if (percentage.value < 100) {
      percentage.value += 1;
    } else {
      clearInterval(interval);
    }
  }, 30);
});
</script>