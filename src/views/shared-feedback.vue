<template>
  <div class = "max-w-4xl mx-auto my-10 flex justify-between items-center">
    <div class="text-2xl font-bold">
          Shared Feedback
        </div>
       <div class="flex flex-col ">
        <div class= "uppercase text-xs font-bold text-[#59636e] tracking-[1.8px] mb-1"> Feedback Period</div>
        <label>
          <select class =" h-[40px] w-[342px] border border[#d9dcde] rounded px-3">
            <option value= "">October</option>
          </select>
        </label>
       </div>
  </div>
  <div v-if = "users.length">
    <div class= "border max-w-4xl mx-auto px-6 mt-8" >
    <div 
    v-for="(user,index) in users" 
    :key='user.uuid'
    class = "flex justify-between items-center py-3 hover:bg-[#59636e1a] cursor-pointer"
    :class="{ 'border-t border-[#D9DCDE]': index !== 0 }"
    >
<div class="flex gap-3 items-center">
  <div class = "rounded-full h-[54px] w-[54px]">
    <img :src = "user.picture.medium" :alt= "user.name.first" class= "rounded-full h-full w-full"/>
  </div>
  <div class= "font-semibold text-xl text-[#59636e]">{{user.name.first}}
  
  </div>
</div>
<button class="border border-[rgb(172,177,182)] font-semibold rounded hover:bg-[#D9DCDE] w-[198px] h-[48px] focus:text-white focus:bg-[#AB61E5] focus:border-none" 
@click = 'handleDetails(index)'>
{{!user.isFilledOut? "Filled Out": "View Submission"}}</button>

  </div>
  
  </div>
  </div>
  <div v-else class="text-center mt-6 font-semibold">Fetching data....</div>
</template>

<script setup>
import axios from 'axios';
import {onMounted, ref} from 'vue'
const users = ref([]);
const fetchRandomUsers =async ()=>{
try{
const {data}= await axios.get('https://randomuser.me/api/?results=10');
users.value = data.results
console.log(users)
}catch(error){
throw new Error(error)
}
}
onMounted(()=>{
  fetchRandomUsers()
})
const handleDetails = (index) => {
  const updatedUser = { ...users.value[index], isFilledOut: !users.value[index].isFilledOut };
  users.value.splice(index, 1, updatedUser);
};
</script>

<style>
</style>
