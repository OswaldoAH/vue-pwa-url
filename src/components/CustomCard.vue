<template>
  <div class="col-md-4 col-sm-12 custom-card">
    <div class="card">
      <div class="title">
        <h3>{{place.title}}</h3>
      </div>
      <div class="img">
        <img :src="place.img_source" :alt="place.title">
      </div>
      <div class="content">
        <p>{{place.description}}</p>
      </div>
      <div class="likes">
        {{place.like}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "customCard",
  props: ["place"],
  methods: {
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
}
.title{
  text-align: center;
  border: 1px solid black;
}
.custom-card{
  padding: 10px;
  background-color: #52b788;
}

</style>