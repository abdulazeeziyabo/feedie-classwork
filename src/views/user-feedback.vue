<template>
        <div class = "max-w-4xl mx-auto my-10  ">
    <button  class="flex items-center gap-3 tracking-[1.8px] text-[#59636E] text-xs font-bold uppercase mb-7" @click="$router.back()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="13"
        viewBox="0 0 8 13"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 11.7L6.66667 13L0 6.5L6.66667 0L8 1.3L2.70833 6.5L8 11.7Z"
          fill="#59636E"
        />
      </svg>
      Back
    </button>
   <div class="flex items-center justify-between mb-5">
    <div>
<h2 class="text-3xl text-[#031323] font-semibold mb-2">{{questions[currentQuestion].question}} </h2>
<p class="text-xs tracking-[1.8px] uppercase font-bold text-[#acb1b6]">Share your feedback for Christopher Johnsons</p>
    </div>
    <div  class="h-[58px] w-[58px] bg-gray-100 rounded-full "></div>
   </div> 
   <div class="warpper border mt-3 px-4 py-5">
<MultipleOptions 
:options="questions[currentQuestion].options" v-if="questions[currentQuestion].type==='multi-choice'" />
<TextArea  v-if="questions[currentQuestion].type === 'long-text'" />
<OptionScale v-if="questions[currentQuestion].type==='option-scale'"/>
<div class="flex justify-between mt-8">
     <button class="w-[134px] h-[40px]  text-white rounded-md font-semibold" @click="currentQuestion--"
     :class="[
            currentQuestion === 0
              ? 'bg-[#ACB1B6] cursor-not-allowed'
              : 'bg-[#AB61E5]',
          ]"
           :disabled="currentQuestion === 0">Previous</button>
     <button class="w-[134px] h-[40px] border border-[#acb1b6] rounded-md font-semibold">Skip</button>
     <button class="w-[134px] h-[40px] bg-[#ab61e5] rounded-md text-white"
     :class="[
              currentQuestion === questions.length - 1
                ? 'bg-[#ACB1B6] cursor-not-allowed'
                : 'bg-[#AB61E5]',
            ]"
            :disabled="currentQuestion === questions.length - 1"
      @click="currentQuestion++">Next</button>
  </div>
  <div>
    <div class="bg-[#f2f3f4] h-1 rounded-sm mt-5">
      <span class="progress-line h-full  block rounded-sm
      "
      :style="`width: ${getProgress}%`"></span>
    </div>
    <div class="mt-5 text-[#031323]">
      <p class="uppercase text-xs font-bold tracking-[1.8px] ">question completed</p>
      <p>{{currentQuestion + 1 }}/{{ questions.length}}</p>
    </div>
  </div>
   </div>
      
</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import MultipleOptions from '@/components/multiple-options.vue';
import TextArea from '@/components/text-area.vue';
import OptionScale from '@/components/option-scale.vue'
const currentQuestion = ref(0);
const questions = [
  {
    question: 'How well did I display courage?',
type:'multi-choice',
options:[`Please Improve
You may have done one or the following: Maybe you were mostly quiet in meetings and when you had something on your mind, you brought it to the team afterward. Or, you had feedback that would be valuable to go, but you found it too difficult. Or, you had an opportunity to grow by doing something uncomfortable but you didn’t. `,
      `You Were Good
You sometimes participate in meetings but you feel that they don’t always bring up important things when they should. `,
      `You Were Great
I and others can count on your courage to help the team do what is right. `,
    ]
},
{
  question:'How well did you understand the class today?',
  type:'option-scale',

},
{
  question:'Give us your personal feed back concerning the class',
  type:'long-text',
}
]
const getProgress = computed(()=>{
 return ((currentQuestion.value + 1)/ questions.length) * 100;
})

</script>

<style scoped>
.wrapper{
  box-shadow: 0px 0px 4px 8px rgba(0,0,0,0.25);
}
.progress-line {
  background: linear-gradient(90deg, #1ddebb 0%, #98fffb 97.67%);
}
</style>

