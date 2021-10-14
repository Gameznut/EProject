<template>
  <div class="home">
    <div class="relative">
      <img class="" src="../assets/wembleyblock.jpg" alt="" />
      <div class="absolute inset-52 mt-20 ml-96 pl-96">
        <h1 class="font-sans font-thin text-4xl text-white">
          SMARTER
          <br />
          GREENER, QUALITY CONSTRUCTION
        </h1>
      </div>
    </div>
    <Ways />
    <Explore />
    <About />
    <Certificate />
  </div>
</template>

<script>
// @ is an alias to /src
import Ways from "@/components/home/ways.vue";
import Explore from "@/components/home/explore.vue";
import About from "@/components/home/aboutus.vue";
import Certificate from "@/components/home/certificate.vue";

export default {
  name: "Home",
  components: {
    Ways,
    Explore,
    About,
    Certificate,
  },
};
</script>
