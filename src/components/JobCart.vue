<template>
   <div  class="grid grid-cols-2 mt-2 sticky top-16 overflow-y-scroll overscroll-contain ">
        <div v-for="job in jobs" :key="job.name" class="my-1"><a href="" class="text-blue-800 hover:underline text-sm">{{job.name}}({{job.total}})</a></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const jobs =ref([
    {name: 'Accounting ', total: 4},
    {name: 'Admin & Office Jobs', total: 4},
    {name: 'Agriculture & Farming', total: 4},
    {name: 'Applied Sciences, Aviation', total: 4},
    {name: 'Apprenticeship Intake Jobs', total: 4},
    {name: 'Attachment & Internship', total: 4},
    {name: 'Banking', total: 4},
    {name: 'College, University & Nursing', total: 4},
    {name: 'Information Technology', total: 4},
])

</script>

<style>

</style>