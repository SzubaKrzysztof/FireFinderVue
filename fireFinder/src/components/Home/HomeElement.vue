<template>
  <article class="overflow-hidden rounded-lg shadow-lg">
    <a href="#">
      <img
        alt="Placeholder"
        class="block h-auto w-full"
        src="https://picsum.photos/600/400/?random"
      />
    </a>

    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
      <h1 class="text-lg">
        <a class="no-underline hover:underline text-white" href="#">
          Article Title {{ n }}
        </a>
      </h1>
      <p class="text-grey text-sm">11/1/19</p>
    </header>

    <footer
      class="flex items-center justify-between leading-none p-2 md:p-4"
    ></footer>
  </article>
</template>

<script setup lang="ts">
const { n } = defineProps(['n'])
</script>

<style lang="scss" scoped></style>
