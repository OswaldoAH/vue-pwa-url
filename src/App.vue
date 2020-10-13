<template>
  <div id="app">
    <header>
      <navigation />
    </header>
    <main>
      
    </main>
    <footer>
      <customFooter />
    </footer>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import CustomFooter from "./components/CustomFooter";
export default {
  name: "app",
  components: {
    Navigation,
    CustomFooter,
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
  padding-top: 75px;
}
</style>
