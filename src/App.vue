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
  methods:{
    async getPlaces() {
      const data = await fetch(
        `${this.urlBase}/api/places/places/`
      ).then(res => res.json());
      this.places = data;
    },
  },
  data() {
    return {
      urlBase: "http://127.0.0.1:8000",
      places: [],
    };
  },
  created(){
    this.getPlaces();
  }
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
