<template>
    <div class="">
        <div class="exp my-10">
            <h1 class="text-4xl w-full my-12 text-blue-400">EXPLORE OUR LATEST DEVELOPMENTS & PROJECTS</h1>
            <div class="flex justify-between text-xl ">
               <div  v-for="exp in explore" :key="exp">
                    <p class="hover:text-yellow-500">{{ exp.icon }}{{ exp.text }}</p>
                </div> 
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            explore: [
                {
                    text:"ALL",
                    icon:"🌎", 
                },
                {
                    text:"RESIDENTIAL",
                    icon:"🏠", 
                },
                {
                    text:"HOTEL",
                    icon:"🏨", 
                },
                {
                    text:"STUDENT",
                    icon:"👨‍🎓", 
                },
                {
                    text:"BUILD-TO-RENT",
                    icon:"👜", 
                }
            ]
        }
    },
}
</script>
<style>
.exp{
    margin-left: 535px;
    margin-right: 535px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>