<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <div
        v-for="n in 8"
        :key="n"
        class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
      >
        <HomeElement :n="n" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeElement from '../components/Home/HomeElement.vue'
</script>

<style scoped></style>
