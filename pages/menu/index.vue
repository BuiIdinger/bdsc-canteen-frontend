<template>
  <!-- Title & Description -->
  <div class="justify-center text-center mt-[70px]">
    <!-- Title -->
    <div class="font-bold text-[35px]">
      <h1>Menu</h1>
    </div>

    <!-- Description-->
    <div class="font-semibold text-[17px]">
      <h2>View the full menu.</h2>
    </div>
  </div>

  <!-- Menu products -->
  <div class="flex justify-center items-center mt-[30px]">
    <div class="grid grid-cols-2 gap-x-[15px] gap-y-[60px]">
      <MenuProduct
        to="/products/sausage-roll"
        name="Sausage Roll"
        image="/products/sausage-roll.avif"
      />

      <MenuProduct
        to="/products/sausage-roll"
        name="Donut"
        image="/products/donut.webp"
      />

    </div>
  </div>
</template>