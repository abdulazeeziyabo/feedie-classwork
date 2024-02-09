<template>
    <div class="bg-[#F2F3F4] h-[75px] flex justify-between items-center px-9"> 
        
 <div class="flex gap-24 h-full items-center ">
    <div class="text-2xl font-semibold">Honesto</div>
<div class="flex gap-24 items-center h-full ">
    <routerLink to = '/shared-feedback' class="h-full flex items-center">Shared Feedback</routerLink>
<routerLink to = '/my-feedback' class="h-full flex items-center">My Feedback</routerLink>
<routerLink to = '/team-feedback' class="h-full flex items-center">Team Feedback</routerLink></div>
 </div>

<div class="flex gap-3">
    <span class="bg-gray-600 rounded-full px-3 py-3">gp</span>
    <div class="flex  flex-col items-center">
    
    <div class= "">Jane Smith</div>
    <button class=" text-xs font-bold text-[#59636e] uppercase">logout</button>
</div>
</div>
        </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
a.router-link-exact-active{
    border-bottom: 3px solid #ab61e5;
}
</style>