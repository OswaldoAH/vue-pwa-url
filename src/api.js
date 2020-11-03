const url = "https://127.0.0.1:8000";

async function getPlaces() {
  return await fetch(`${url}/api/places/places/`)
    .then((res) => res.json())
    .then((res) => res.places);
}
