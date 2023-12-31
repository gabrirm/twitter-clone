<template>
  <div class="border-x border-gray-100 dark:border-gray-700 ">
    <div
      class="sticky top-0 px-4 bg-white/80 backdrop-blur-md dark:bg-dim-900/80"
    >
      <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">
        {{ title }}
      </h2>
    </div>
    <div v-if="loading" class="flex items-center justify-center p-4 border-b border-gray-100 dark:border-gray-700">
      <UISpinner />
    </div>
    <div v-else><slot /></div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
