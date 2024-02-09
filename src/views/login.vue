<template>
    <div class=" bg-[url('../assets/images/login-bg.png')] h-screen bg-cover relative">

      <form class="bg-white mx-auto w-[371px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-20 pb-16">
        <HLogo class="mx-auto"/>
        <div class="text-center font-semibold text-3xl mb-8">Honesto</div>
        <div class="px-16">
            <label class="font-semibold flex flex-col mb-2" > Login as:
                <select class="w-full border border-[] h-[43px] mb-4">
            <option value= "select">Selecting...</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
        </select>
            </label>
            
        <button class="bg-[#ab61e5] w-full py-3 text-white">Login</button>
        </div>
      </form>
      
    </div>
    
</template>

<script setup>
   import HLogo from '../components/svg-components/h-logo.vue' ;
   import {ref}  from 'vue'

   const loginAs = ref(" ")
</script>

<style scoped>
.wrapper{
   background-image: url('../assets/images/login-bg.png'); 
   background-size: cover;
   height:200px;
}
</style>