<script setup>
import JobCart from "../../components/JobCart.vue";
import JobCards from "../../components/JobCards.vue"
import SponsorCard from "../../components/SponsorCard.vue";

</script>

<template>
<div class="md:grid grid-cols-5 grid-rows-1 gap-2">
	<div class="box row-span-2">
        <h2 class="font-medium text-xl text-blue-900">Job Cartegories</h2>
        <div class="my-3">
            <input type="search" id="default-search" class="block w-full p-4 h-1 text-blue-900 border border-blue-300 rounded-md bg-gray-50" placeholder="Search Job...">  
        </div>
        <hr/>
        <JobCart/>
    </div>
	<div class="box col-start-2 col-span-4">
        <div class="md:flex">
            <div class="px-3">
                <JobCards/>
                <JobCards/>
                <JobCards/>
                <JobCards/>
                <JobCards/>
                <JobCards/>
                <JobCards/>
                <JobCards/>
                <JobCards/>
                <JobCards/>
                <JobCards/>
                <JobCards/>
            </div>
            <div class="">
                <SponsorCard/>
            </div>
        </div>
    </div>
</div>
</template>
