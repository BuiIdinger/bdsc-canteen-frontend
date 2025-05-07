<template>
  <Transition name="loading-screen">
    <div
      class="fixed top-0 left-0 w-screen h-screen bg-white z-[999] flex justify-center items-center"
      v-if="LoadingScreen.visible.value"
    >
      <div>
        <div class="flex flex-col gap-y-[25px]">
          <!-- Loader-->
          <div class="flex justify-center">
            <LoadingThrobber />
          </div>

          <!-- Message -->
          <Transition :key="LoadingScreen.Phrase.phraseKey.value">
            <div class="font-semibold text-center">
              <p>{{ LoadingScreen.Phrase.phrase.value }}</p>
            </div>
          </Transition>
        </div>

        <!-- Loading bar -->
        <div class="mt-[10px] w-[200px]">
          <LoadingBar />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { LoadingScreen } from "~/compostables/LoadingScreen"
import { onMounted } from "vue"

var interval: any;

onMounted(() => {
  interval = setInterval(() => {
    LoadingScreen.Phrase.rotate(); 
  }, 2000);  LoadingScreen.Phrase.rotate();
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style lang="css" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>