<template>
    <div class="space-y-5 ">
<div v-for="(option, index) in options" :key="index"
class="bg-[#f2f3f4] py-5 px-5"
:class="index !==1 ? 'bg-[#f2f3f4] text-black' : 'bg-[#59636E] text-white'">
{{ option }}
</div>
</div>
</template>

<script setup>
  defineProps({
    options:{
        type: Array,
        default: [],
    },
  })
</script>

<style scoped>

</style>