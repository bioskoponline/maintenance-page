<template>
  <div
    class="flex flex-col items-center p-8 text-white h-full w-full align-middle justify-center"
  >
    <img src="/Maintenance.svg" :width="100" :height="100" class="mb-4" />
    <div class="font-bold text-sm text-center mb-4 w-96">
      Maaf saat ini platform kami sedang dalam pemeliharaan sistem
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .layout-payment-wrapper {
    width: 500px;
    @apply bg-blue-1 p-9 border border-white border-opacity-20 rounded-2xl;
  }
}
@media (max-width: 768px) {
  .layout-payment-wrapper {
    @apply w-full bg-blue-1 p-4;
    // for mobile layout full-screen height
    // needs div parent with fixed or 100vh height
    @apply h-full flex flex-col py-12;
  }
}
</style>
