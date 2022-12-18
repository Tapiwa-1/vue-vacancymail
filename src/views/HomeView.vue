<script setup>
import JobCart from "../components/JobCart.vue";
import JobCards from "../components/JobCards.vue"


</script>

<template>
<div class="md:grid overflow-hidden grid-cols-5 grid-rows-1 gap-2 md:mx-4">
	<div class="box row-span-2">
        <h2 class="font-medium text-xl text-blue-900">Job Cartegories</h2>
        <div class="my-3">
            <input type="search" id="default-search" class="block w-full p-4 h-1 text-blue-900 border border-blue-300 rounded-md bg-gray-50" placeholder="Search Job...">  
        </div>
        <hr/>
        <JobCart/>
    </div>
	<div class="box col-start-2 col-span-4">
        <div class="md:grid grid-cols-10 gap-2">
            <div class="md:col-span-5 ">
                <JobCards/>
                <JobCards/>
                <JobCards/>
                <JobCards/>
                <JobCards/>
            </div>
            <div class="md:col-span-4">
                  <div class="md:mx-2 my-5 w-full  bg-white border border-gray-200 rounded-lg shadow-md ">
                        <div class="flex items-center mx-6 my-2 text-center">
                            <h1 class="font-extrabold my-6 text-transparent text-3xl bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Golden Sponsors</h1> 
                        </div>
                        <div class="bg-blue-900 text-white px-2 py-1 text-xs flex justify-between py-3" >
                            <img src="../../public/sponsor1.png" width="50" alt=""/>
                            <img src="../../public/sponsor2.png" width="50" alt=""/>
                            <img src="../../public/Sponsor4.png" width="50" alt=""/>
                            <img src="../../public/sponsor2.png" width="50" alt=""/>

                            <img src="../../public/sponsor2.png" width="50" alt=""/>
                            
                        </div>
                        <h1 class="mx-6 text-2xl font-bold text-blue-900">About</h1>
                        <p class="mx-6 text-sm ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum repellat laborum numquam voluptatem exercitationem veniam tempore iusto, nihil debitis, explicabo impedit officia optio repellendus illum modi ullam esse deleniti?
                        </p>
                        <hr>
                        <p class="mx-6 my-2 mb-6 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa asperiores nemo eligendi aspernatur qui voluptas sunt saepe? Ut quas, eaque sed expedita, voluptate, quam molestias perspiciatis tempora id sapiente minus!
                        </p>
                    </div>
  
            </div>
        </div>
    </div>
</div>
</template>
