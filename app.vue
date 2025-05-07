<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
      <TabBar />
      <LoadingScreen />

      <div>
        
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { WebSocket } from "~/compostables/WebSocket"
import { onMounted } from "vue"

onMounted(() => {
  WebSocket.connect();
});

// <ModelsMore />
</script>