<template>
  <div class="flex flex-col">
    <!-- Card: What's happening -->
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem v-for="item in whatsHappeningItems">
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">
            {{ item.title }}
          </h2>
          <p class="text-xs text-gray-400">{{ item.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
    <!-- Card: Who to follow -->
    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem
        v-for="(item, index) in whoToFollowItems"
        :key="index"
      >
        <div class="flex flex-row justify-between p-2 items-center">
          <div class="flex flex-row">
            <img
              :src="item.image"
              :alt="item.name"
              class="w-10 h-10 rounded-full"
            />
            <div class="flex flex-col ml-2 items-center">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">
                {{ item.name }}
              </h1>
              <p class="text-xs self-start text-gray-400">{{ item.handle }}</p>
            </div>
          </div>
          <div class="flex items-center h-full">
            <button
              class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<script setup>
const whatsHappeningItems = ref([
  {
    title: "SpaceX",
    count: "1.2M Tweets",
  },
  {
    title: "Bitcoin",
    count: "402k Tweets",
  },
  {
    title: "NBA",
    count: "103k Tweets",
  },
  {
    title: "Artificial Intelligence",
    count: "50k Tweets",
  },
]);

const whoToFollowItems = ref([
  {
    name: "Elon Musk",
    handle: "@elonmusk",
    image: "https://picsum.photos/id/233/200/200",
  },
  {
    name: "Bill Gates",
    handle: "@BillGates",
    image: "https://picsum.photos/id/12/200/200",
  },
  {
    name: "Jeff Bezos",
    handle: "@JeffBezos",
    image: "https://picsum.photos/id/53/200/200",
  },
  {
    name: "Mark Zuckerberg",
    handle: "@finkd",
    image: "https://picsum.photos/id/234/200/200",
  }
]);
</script>
