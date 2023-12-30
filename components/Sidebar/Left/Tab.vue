<template>
  <nuxt-link
    to="#"
    class="text-black transition ease-in-out duration-350 dark:hover:bg-dim-200 dark:text-white flex items-center p-3 w-min hover:bg-gray-200 rounded-full"
  >
    <div class="w-6 h-6 text-dark transition ease-in-out duration-300">
      <slot name="icon" />
    </div>
    <div
      class="ml-4 text-xl hidden xl:block"
      :class="{ 'font-semibold': active, 'font-normal': !active }"
    >
      <slot name="name" />
    </div>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
