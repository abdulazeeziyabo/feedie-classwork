<template>
    <div class="bg-[#F2F3F4] h-[75px] flex justify-between items-center px-9"> 
        
 <div class="flex gap-24 h-full items-center ">
    <div class="text-2xl font-semibold">Honesto</div>
<div class="flex gap-24 items-center h-full text-base ">
    <routerLink to = '/shared-feedback' class="h-full flex items-center border-b-[3px] border-[#f2f3f4]"> 
<NavLink :feedback = "shareFeedback"/>
</routerLink>
<routerLink to = '/my-feedback' class="h-full flex items-center border-b-[3px] border-[#f2f3f4]"><NavLink :feedback = "myFeedback"/>
</routerLink>
<routerLink to = '/team-feedback' class="h-full flex items-center border-b-[3px] border-[#f2f3f4]"><NavLink :feedback = "teamFeedback"/>
</routerLink></div>
 </div>

<div class="flex gap-1 items-center border-l border-[#D9DCDE] h-full pl-4">
    <span class="rounded-full px-3 py-3">
      <NavImage/>  
    </span>
    <div class="flex  flex-col items-center">
    
    <div class= "">Jane Smith</div>
    <button class=" text-xs font-bold text-[#59636e] uppercase">logout</button>
</div>
</div>
        </div>
    
</template>

<script lang="ts" setup>
import NavImage from './svg-components/nav-image.vue';
import NavLink from './nav-link.vue';
import { ref } from 'vue';

   
let shareFeedback = ref({
  text: "Share Feedback",
  notification: 2,
});
let myFeedback = ref({
  text: "My Feedback",
  notification: 8,
});
let teamFeedback = ref({
  text: "Team Feedback",
  notification: 0,
});    
</script>

<style scoped>
a.router-link-exact-active{
    border-bottom: 3px solid #ab61e5;
}
</style>