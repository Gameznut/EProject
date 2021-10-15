<template>
  <div class="">

    <div class="splide" data-aos =" zoom-out" data-aos-duration="1000">
  <div class="splide__track px-12">
		<ul class="splide__list">
			<li class="splide__slide bg-gray-800 m-2 p-10">Slide 01</li>
			<li class="splide__slide bg-gray-700 m-2 p-10">Slide 02</li>
			<li class="splide__slide bg-blue-800 m-2 p-10">Slide 03</li>
      <li class="splide__slide bg-gray-800 m-2 p-10">Slide 01</li>
      <li class="splide__slide bg-gray-700 m-2 p-10">Slide 02</li>
      <li class="splide__slide bg-gray-300 m-2 p-10">Slide 03</li>
      <li class="splide__slide bg-gray-600 m-2 p-10">Slide 04</li>
      <li class="splide__slide bg-gray-800 m-2 p-10">Slide 06</li>
      <li class="splide__slide bg-blue-700 m-2 p-10">Slide 05</li>
      <li class="splide__slide bg-green-300 m-2 p-10">Slide 08</li>
      <li class="splide__slide bg-yellow-600 m-2 p-10">Slide 09</li>
		</ul>
  </div>
</div>
<div
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  >
  
<Splide class="" :options="options">
    <SplideSlide class="">
      <li class="splide__slide bg-gray-800 m-2 p-10">Slide 01</li>
    </SplideSlide>
    <SplideSlide class="">
      <li class="splide__slide bg-gray-700 m-2 p-10">Slide 02</li>
    </SplideSlide>
    <SplideSlide class="">
      <li class="splide__slide bg-gray-300 m-2 p-10">Slide 03</li>
    </SplideSlide>
    <SplideSlide class="">
      <li class="splide__slide bg-gray-600 m-2 p-10">Slide 04</li>
    </SplideSlide>
    <SplideSlide class="">
      <li class="splide__slide bg-gray-800 m-2 p-10">Slide 06</li>
    </SplideSlide>
    <SplideSlide class="">
      <li class="splide__slide bg-blue-700 m-2 p-10">Slide 05</li>
    </SplideSlide>
    <SplideSlide class="">
      <li class="splide__slide bg-green-300p-10 m-2 p-10">Slide 08</li>
    </SplideSlide>
    <SplideSlide class="">
      <li class="splide__slide bg-yellow-600 m-2 p-10">Slide 09</li>
    </SplideSlide>

<div class="splide__progress">
		    <div class="splide__progress__bar bg-red-500 bg-gradient-to-r from-red-500 via-purple-600 to-gray-400">
		    </div>
      </div>

    <template class="" #after-slider>
      
      <div class="splide__autoplay flex i justify-around">
        <button class="splide__play">Play</button>
        <button class="splide__pause">Pause</button>
      </div>
  </template>
  </Splide>
</div>

  
    <div class="exp my-10">
      <h1 class="text-4xl w-full my-12 text-blue-900">
        EXPLORE OUR LATEST DEVELOPMENTS & PROJECTS
      </h1>
      <div class="flex justify-between text-xl">
        <div v-for="exp in explore" :key="exp">
          <p class="hover:text-yellow-500">{{ exp.icon }}{{ exp.text }}</p>
        </div>
      </div>
    </div>
    <div class="mx-40 grid grid-cols-3">
      <div v-for="card in cards" class="relative cards" :key="card">
        <img class="w-full card" :src="card.img" alt="" />
        <h1
          class="
            bg-black
            hover:bg-red-900
            text-white
            absolute
            bottom-0
            w-full
            h-16
            px-12
            py-4
            text-xl
            uppercase
            bg-opacity-40
          "
        >
          {{ card.title }}
        </h1>
      </div>
    </div>
    <div
      class="
        flex
        justify-center
        mt-10
        mb-5
        hover:bg-black
        border-2 border-black
        hover:text-blue-400
        px-3
        py-3
        btn
      "
    >
      <a href="#">ALL PROJECTS</a>
    </div>
  </div>
  
</template>
<script>
import Splides from '@splidejs/splide'
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
//import LocomotiveScroll from 'locomotive-scroll';
//import 'locomotive-scroll/dist/locomotive-scroll.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default {
  data() {
    return {
      explore: [
        {
          text: "ALL",
          icon: "🌎",
        },
        {
          text: "RESIDENTIAL",
          icon: "🏠",
        },
        {
          text: "HOTEL",
          icon: "🏨",
        },
        {
          text: "STUDENT",
          icon: "👨‍🎓",
        },
        {
          text: "BUILD-TO-RENT",
          icon: "👜",
        },
      ],
      cards: [
        {
          title: "APEX HOUSE, WIMBLEY",
          img: require("../../assets/building2.jpg"),
        },
        {
          title: "Mountearl Gardens, Streatham",
          img: require("../../assets/building3.jpg"),
        },
        {
          title: "GEORGE STREET, CROYDON",
          img: require("../../assets/building4.jpg"),
        },
        {
          title: "Battersea Power Station, Battersea",
          img: require("../../assets/building5.jpg"),
        },
        {
          title: "Chelsea Barracks, City of Westminster",
          img: require("../../assets/building6.jpg"),
        },
        {
          title: "Chapter, Lewisham",
          img: require("../../assets/building7.jpg"),
        },
      ],
      options:{
        type   : 'loop',
        autoplay     : 'pause',
        perPage: 3,
        focus  : 'start',
        perMove: 2,
        pauseOnHover : true,
        resetProgress: false,
        hasSliderWrapper: true
      },
      datas: ''
    };
  },
  mounted() {
    new Splides( '.splide' ).mount();
    AOS.init()
    // this.datas = new LocomotiveScroll();
    // const target = document.querySelector('#js-target');
    // this.datas.scrollTo(target);
  },
  components:{
    SplideSlide,
    Splide
  }
};
</script>

<style>
.exp {
  margin-left: 535px;
  margin-right: 535px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.card {
  height: 570px;
}
.btn {
  margin-left: 850px;
  margin-right: 850px;
}
::after :hover .cards {
  background-color: #000;
}
</style>
