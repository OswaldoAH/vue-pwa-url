<template>
  <div id="app">
    <header>
      <navigation />
    </header>
    <main>
      <div class="container">
        <div class="row">
          <customCard v-for="(place, index) in places" :key="index" :place=place />
        </div>
      </div>
    </main>
    <footer>
      <customFooter />
    </footer>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import CustomFooter from "./components/CustomFooter";
import CustomCard from "./components/CustomCard";

export default {
  name: "app",
  components: {
    Navigation,
    CustomFooter,
    CustomCard,
  },
  data() {
    return {
      places: [
        {
          title: "Tikal",
          img_source:
            "https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/116000_B_Guatemala_Tikal_shutterstock_000021688951.jpg",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iusto tempora, sed nisi odio non dolorum, voluptatem maxime aut distinctio molestiae ex? Reprehenderit ducimus expedita enim omnis et consequatur nam.",
          like: 0,
        },
        {
          title: "Tikal",
          img_source:
            "https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/116000_B_Guatemala_Tikal_shutterstock_000021688951.jpg",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iusto tempora, sed nisi odio non dolorum, voluptatem maxime aut distinctio molestiae ex? Reprehenderit ducimus expedita enim omnis et consequatur nam.",
          like: 0,
        },
        {
          title: "Tikal",
          img_source:
            "https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/116000_B_Guatemala_Tikal_shutterstock_000021688951.jpg",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iusto tempora, sed nisi odio non dolorum, voluptatem maxime aut distinctio molestiae ex? Reprehenderit ducimus expedita enim omnis et consequatur nam.",
          like: 0,
        },
        {
          title: "Tikal",
          img_source:
            "https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/116000_B_Guatemala_Tikal_shutterstock_000021688951.jpg",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iusto tempora, sed nisi odio non dolorum, voluptatem maxime aut distinctio molestiae ex? Reprehenderit ducimus expedita enim omnis et consequatur nam.",
          like: 0,
        },
        {
          title: "Tikal",
          img_source:
            "https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/116000_B_Guatemala_Tikal_shutterstock_000021688951.jpg",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iusto tempora, sed nisi odio non dolorum, voluptatem maxime aut distinctio molestiae ex? Reprehenderit ducimus expedita enim omnis et consequatur nam.",
          like: 0,
        },
      ],
    };
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
main {
  padding-top: 85px;
}
</style>
