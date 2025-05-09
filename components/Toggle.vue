<template>
  <button
    class="block w-[56px] h-[32px] rounded-full cursor-pointer relative group transition-bg-color duration-[300ms] ease-in-out"
    :class="{'bg-green-500': localValue, 'bg-gray-300': !localValue}"
    @click="updateChecked"
  >
    <input 
      type="checkbox" 
      id="toggle" 
      class="hidden" 
      v-model="localValue"
    />
    <div 
      class="absolute left-1 top-1 w-6 h-6 bg-[#fcfcfcab] rounded-full transform transition-transform transition-bg-color duration-[300ms] ease-in-out"
      :class="{'translate-x-6': localValue, 'bg-white': localValue}"
    />
    <Transition>
      <div
        class="absolute top-[0px] w-[26px] h-[26px] bg-[#fcfcfcab] opacity-50 rounded-full transform p-[16px] group-hover:block hidden transition-transform transition-bg-color duration-[300ms] ease-in-out"
        :class="{'translate-x-6': localValue, 'bg-gray-300': localValue}"
      />
    </Transition>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

const localValue = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
  localValue.value = newValue;
});

const updateChecked = () => {
  localValue.value = !localValue.value;
  emit("update:modelValue", localValue.value);
};
</script>

<style scoped lang="css">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
