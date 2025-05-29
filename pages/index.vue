<template>
  <div class="m-[15px] rounded-[10px] text-black flex flex-col justify-between shadow-[0_0_10px_1px_rgba(0,0,0,0.3)] overflow-hidden">
    <!-- Empty div to push elements to bottom -->
    <div>
      <NuxtImg
        src="/daily-deal.png"
        alt="Daily deal"
      />
    </div>

    <div class="p-[14px]">
      <!-- Title -->
      <div class="font-bold text-[25px]">
        <h1>Breakfast Combo</h1>
      </div>

      <!-- Subtitle -->
      <div class="font-medium">
        <h2>Get started with this deal.</h2>
      </div>

      <!-- Price -->
      <div class="font-bold text-[26px] mt-[4px]">
        <p>$7.99</p>
      </div>
    </div>
  </div>

  <div class="my-[40px] border-t-[1px]" />

  <!-- Categories -->
  <div class="flex flex-col gap-y-[10px] mx-[20px]" v-if="false">
    <div class="font-bold text-[20px]">
      <h1>Categories</h1>
    </div>

    <div class="flex gap-x-[20px] mt-[4px]">
      
      <!-- One -->
      <div class="flex justify-center">
        <div>
          <!-- Circle Icon -->
          <div class="rounded-full w-[100px] h-[100px] flex items-center justify-center border-black border-[1px] border-opacity-75">
            <NuxtImg
              src="lunch-category.png"
              class="rounded-full"
            />
          </div>

          <!-- Title -->
          <div class="font-semibold text-center mt-[8px]">
            <p>Lunch</p>
          </div>
        </div>
      </div>



    </div>
  </div>


  <!-- Other stuff -->
  <div class="flex flex-col gap-y-[10px] mx-[20px] my-[20px]">
    <div class="rounded-[10px] overflow-hidden shadow-[0_0_15px_1px_rgba(0,0,0,0.3)]">
      <div class="text-[70px] font-bold bg-[#4b7af1] text-white flex justify-center py-[20px]">
        <p>10%</p>
      </div>
      <div class="bg-white p-[14px]">
        <!-- Title -->
        <div class="font-bold text-[25px]">
          <h1>End of the year</h1>
        </div>

        <!-- Subtitle -->
        <div class="font-medium">
          <h2>Receive 10% of certain products.</h2>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { useAuthenticationStore } from "~/stores/AuthenticationStore"
</script>