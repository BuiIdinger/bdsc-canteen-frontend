<template>
  <div class="text-[15px] border-black border-opacity-30 border-[1px] flex rounded-full cursor-pointer">
    <input
      class="border-none bg-transparent outline-none text-black w-full py-[20px] px-[20px] rounded-full"
      :type="type"
      :placeholder="label"
      :name="label"
      :value="modelValue"
      @input="handleInput"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
    default: "NULL"
  },
  modelValue: {
    type: String,
    required: true,
    default: "NULL"
  },
  type: {
    type: String,
    required: true,
    default: "text"
  },
});

const emit = defineEmits(['update:modelValue']);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>