<template>
  <div id="nav">
    <div class="fixed z-10">
      <div class="flex items-center mx-40">
        <img class="mr-96 pr-96" src="./assets/peopl.svg" alt="" />
        <div class="flex justify-end">
          <nav
            class="
              mx-3
              my-8
              px-4
              uppercase
              font-bold
              py-2
              text-white
              hover:text-yellow-600
            "
            :key="link"
            v-for="(to, link) in links"
          >
            <router-link :to="to">{{ link }}</router-link>
          </nav>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: {
        Home: "/",
        Project: "project",
        About: "about",
        News: "news",
        Contact: "contact",
      },
    };
  },
};
</script>
