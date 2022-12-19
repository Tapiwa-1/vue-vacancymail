<template>
   <div  class="grid grid-cols-2 sticky top-0 overflow-y-scroll overscroll-contain ">
        <div v-for="job in jobs" :key="job.name" class="my-1"><a href="" class="text-blue-800 hover:underline text-sm">{{job.name}}({{job.total}})</a></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
//comment
const jobs =ref([
    {name: 'Accounting ', total: 4},
    {name: 'Admin & Office Jobs', total: 3},
    {name: 'Agriculture & Farming', total: 5},
    {name: 'Applied Sciences, Aviation', total: 3},
    {name: 'Apprenticeship Intake Jobs', total: 12},
    {name: 'Attachment & Internship', total: 67},
    {name: 'Banking', total: 43},
    {name: 'College, University & Nursing', total: 22},
    {name: 'Construction Jobs', total: 13},
    {name: 'Consultancy, Research Jobs', total: 12},
    {name: 'Cruise Ship & Cabin Crew Jobs', total: 52},
    {name: 'Diaspora Jobs', total: 32},
    {name: 'Driving & Logistics Jobs', total: 52},
    {name: 'Education & Teaching Jobs', total: 62},
    {name: 'Engineering Jobs', total: 72},
    {name: 'Environmental, Forestry Jobs', total: 182},
    {name: 'General Work Jobs', total: 122},
    {name: 'Graduate Trainee Jobs', total: 12},
    {name: 'Healthcare, Pharmacy, Doctors Jobs', total: 32},
    {name: 'Information Technology', total: 42},
    {name: 'Information Technology', total: 52},
    {name: 'Information Technology', total: 162},
    {name: 'Information Technology', total: 12},
    {name: 'Information Technology', total: 127},
    {name: 'Information Technology', total: 127},
    {name: 'Information Technology', total: 124},
])
</script>

<style>
</style>