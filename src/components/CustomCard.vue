<template>
  <div class="col-md-4 col-sm-12 custom-card">
    <div class="card">
      <div class="title">
        <h3>{{ place.place_name }}</h3>
      </div>
      <div class="img">
        <b-carousel id="carousel-fade" fade controls indicators>
          <b-carousel-slide
            v-for="(image, index) in place.images"
            :key="index"
            :img-src="image.image_path"
            class="img"
          ></b-carousel-slide>
        </b-carousel>
      </div>
      <div class="content">
        <p>{{ place.place_description }}</p>
      </div>
      <div class="likes">
        <button type="submit" @click="updatePlace(place)">
          {{ place.place_like }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "customCard",
  data() {
    return {
      urlBase: "http://127.0.0.1:8000",
      vote: false,
    };
  },
  methods: {
    async updatePlace(editPlace) {
      if (!this.vote) {
        editPlace.place_like++;
        let id = editPlace.id;
        console.log(editPlace.id);
        await fetch(`${this.urlBase}/api/places/places/${id}`, {
          method: "PUT",
          body: JSON.stringify(editPlace),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      this.vote = true;
    },
  },
  props: ["place"],
};
</script>

<style scoped>
.img {
  height: 100%;
  padding: 10px;
}
.title {
  border-bottom: 1px solid black;
}
.custom-card {
  padding: 10px;
  text-align: center;
}
.content {
  text-align: justify;
}
button {
  height: 50px;
  width: 50px;
}
.card {
  border-radius: 16px;
  padding: 15px;
}
</style>