<template>
  <div class="fixed bottom-0 w-full bg-white border-t-[0.3px] border-black border-opacity-30 z-[500] flex justify-center">
    <!-- Home -->
    <TabBarTab
      to="/"
      text="Home"
      :icon="IconsHome"
    />

    <!-- Menu -->
    <TabBarTab
      to="/menu"
      text="Menu"
      :icon="IconsCoffee"
    />
    
    <!-- Orders -->
    <TabBarTab
      to="/orders"
      text="Orders"
      :icon="IconsPackage"
    />

    <!-- More -->
    <TabBarTab
      to="/more"
      text="More"
      :icon="IconsMore"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { TabBar } from "~/compostables/TabBar"

import IconsCoffee from "~/components/icons/Coffee.vue"
import IconsHome from "~/components/icons/Home.vue"
import IconsPackage from "~/components/icons/Package.vue"
import IconsMore from "~/components/icons/More.vue"

onMounted(() => {
  TabBar.watchRoute();
});
</script>