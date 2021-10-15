<template>
  <div class="">
    <div class="flex justify-center">
      <h1 class="text-4xl my-5 text-blue-900">
        CERTIFICATION, CLIENTS & AWARDS
      </h1>
    </div>
    <!-- slider -->
    <div class="glide relative">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides mt-10">
          <li class="glide__slide bg-gray-800 m-2 p-10">i love you</li>
          <li class="glide__slide bg-gray-800 m-2 p-10">i don't love you</li>
          <li class="glide__slide bg-blue-800 m-2 p-10">i don't love you</li>
          <li class="glide__slide bg-red-800 m-2 p-10">i don't love you</li>
          <li class="glide__slide bg-green-800 m-2 p-10">i don't love you</li>
        </ul>
      </div>
      <div class="">
        <div class="flex top-0 left-3/4 absolute" data-glide-el="controls">
          <button
            class="glide__arrowcor bg-yellow-500 flex glide__arrow--left ml-72"
            data-glide-dir="<"
          >
            Start
          </button>
        </div>
        <div
          class="w-full flex justify-end top-0 absolute right-5"
          data-glide-el="controls"
        >
          <button
            class="
              glide__arrowcor
              bg-red-600
              glide__arrow--right
              flex
              justify-end
            "
            data-glide-dir=">"
          >
            End
          </button>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div class="relative bg-black h-96">
      <img
        class="w-full opacity-70 h-full"
        src="../../assets/building9.jpg"
        alt=""
      />
      <div class="flex justify-center">
        <div class="absolute top-0 my-20 flex justify-between text-white">
          <div>
            <h1 class="text-2xl hover:text-blue-900 my-4">QUICK LINKS</h1>
            <div class="flex text-xl flex-col">
              <a class="hover:text-blue-900" href="">HOME</a>
              <a class="hover:text-blue-900" href="">PROJECTS</a>
              <a class="hover:text-blue-900" href="">ABOUT</a>
              <a class="hover:text-blue-900" href="">NEWS</a>
              <a class="hover:text-blue-900" href="">CONTACT</a>
              <a class="hover:text-blue-900" href="">WATCH US IN ACTION</a>
            </div>
          </div>
          <div class="w-2/4 text-lg">
            <a class="text-2xl my-4">LATEST NEWS</a>
            <div class="flex flex-col text-xl">
              <a class="text-lg hover:text-blue-900" href=""
                >GREENFORD QUAY UNVEILED: OVER 2000 BTR HOMES AND MODULAR
                METHODS TO REDUCE CARBON FOOTPRINT
              </a>
              <small>BTR News, April 2021</small>
              <a class="text-lg hover:text-blue-900" href=""
                >GGREENER METHODS OF HOUSING BUILDING WILL BE VITAL
                POST-RECOVERY
              </a>
              <small>Development Finance Today, June 2020</small>
            </div>
          </div>
          <div>
            <a class="text-2xl my-4 hover:text-blue-900">CONTACT</a>
            <div class="flex text-sm flex-col">
              <p class="text-sm" href="">
                5th Floor <br />
                62-64 Baker Street <br />
                London <br />
                W1U 7DF
              </p>
              <p class="my-2" href="">2021 © Tide Constructio</p>
              <a class="hover:text-blue-900 my-3" href="#">Built by PABLO</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.btnleft {
  left: 1000px;
}
</style>
<script>
import "@glidejs/glide/dist/css/glide.core.min.css";
import Glide from "@glidejs/glide/dist/glide.min.js";
import "@glidejs/glide/dist/css/glide.theme.min.css";
export default {
  data() {
    return {
      glides: {
        type: "carousel",
        focusAt: "center",
        perView: 3,
        hoverpause: true,
        autoplay: 3000,
        gap: 10,
        peek: {
          before: 10,
          after: 100,
        },
        breakpoints: {
          1024: {
            perView: 2,
          },
          600: {
            perView: 1,
          },
        },
      },
    };
  },
  mounted() {
    new Glide(".glide", this.glides).mount();
  },
};
</script>
