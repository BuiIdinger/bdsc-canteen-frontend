<template>
  <div class="skeleton opacity-60 rounded-full" />
</template>

<style scoped>
.skeleton {
  background: linear-gradient(90deg, rgb(45, 45, 45) 25%, rgb(25, 25, 25) 50%, rgb(45, 45, 45) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>