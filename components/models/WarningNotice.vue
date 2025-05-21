<template>
  <div
    class="h-screen w-screen fixed z-[995] bg-white top-0 p-[15px] overflow-hidden"
    v-if="visible"
  >
    <div class="h-full p-[25px] overflow-y-auto">
      <!-- Title -->
      <div class="flex font-bold text-[34px] justify-center mt-[8px]">
        <h1>Hello {{ name }}!</h1>
      </div>

      <div class="mt-[25px]">
        <p>I was tasked with creating a Canteen app for my Ditigal programming assignment. Normally students would use Python (Programming language) to create an app. Real world apps don't function like that, so I've decided to put my skills to use an create an app that functions just like a real world app.</p>
      </div>

      <div class="mt-[25px]">
        <p>Any feedback should be directed to the form that was sent with my email. Any causal chat should be directed to @buildinger_ on Instagram.</p>
      </div>

      <p class="mt-[25px]">
        <p>If you would like to see the process behind making this, all code, documentation will be released on June 16. Please DM me on instagram @buildinger_ to be put onto a list.</p>
      </p>

      <!-- Nerd stuff -->
      <div class="mt-[25px] text-red-700">
        <p>Data entered will be saved in Sydney, and will be encrypted. I do record analytics in order to improve user experience.</p>
      </div>
      
      <div class="mt-[30px] flex flex-col gap-y-[20px]">
        <!-- Continue button -->
        <button
          class="block mx-auto bg-[#4b7af1] rounded-full w-full"
          @click="closeModel"
        >
          <div class="p-[20px] text-center text-white">
            <p>Alright</p>
          </div>
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// ion care abt this mess
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"

const visible = ref<boolean>(true);

onMounted(() => {
  const shownBefore = localStorage.getItem("warningClosed");
  if (shownBefore) {
    visible.value = false;
  }
});

// needa set cookie to prevent model from being shown again
const closeModel = () => {
  localStorage.setItem("warningClosed", "yeah");
  visible.value = false;
}

const name = ref<string>("there")

onMounted(() => {
  const route = useRoute();
  if (route.query.r) {
    name.value = route.query.r
  }
});
</script>