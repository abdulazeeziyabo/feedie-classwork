<template>
   <div class="grid grid-cols-10 gap-3"
   @mouseleave="handleMouseLeave"
    @mouseenter="handleMouseEnter">
    <div v-for="n in 10" :key="n" 
    class=" h-[74px] cursor-pointer"
    :class="[(selectedIndex || hoveredIndex) >= n ? 'bg-[#AB61E5]' : 'bg-[#F2F3F4]']"
      @mouseover="handleMouseOver(n)"
      > 
    </div>
   </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const hoveredIndex = ref(0)
const selectedIndex = ref(0)

const handleMouseOver =  (index:number)=>{
hoveredIndex.value = index
}
const handleMouseLeave = () => {
  hoveredIndex.value = 0;
};
const handleMouseEnter = () => {
  selectedIndex.value = 0;
//   emits("selected", 0);
};
</script>

<style lang="scss" scoped>

</style>