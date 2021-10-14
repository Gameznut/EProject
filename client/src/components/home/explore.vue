<template>
  <div class="">
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
    };
  },
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
