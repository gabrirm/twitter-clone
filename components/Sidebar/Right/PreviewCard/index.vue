<template>
  <div
    class="m-2 overflow-hidden border rounded-2xl bg-gray-50 dark:bg-dim-700 border-white dark:border-gray-700"
  >
    <h1
      class="p-3 text-xl font-extrabold border border-white dark:border-gray-700 text-gray-900 border-b dark:text-white"
    >
      {{ title }}
    </h1>
    <slot />

    <div
      class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-400 transition ease-in-out duration-300"
    >
      Show more
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
