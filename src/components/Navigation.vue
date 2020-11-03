<template>
  <nav>
    <b-navbar toggleable="md" type="dark" class="color">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#app">
          <img src="../assets/logo.png" alt="Guate Viaja" />
        </b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item href="#app">Inicio</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </nav>
</template>

<script>
export default {
  name:'navigation'
};
</script>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  z-index: 10;
}
.color {
  background-color: rgb(6, 73, 102);
}
img{
    height: 50px;
}
</style>