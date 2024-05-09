mapboxgl.accessToken = mapToken;
console.log(listing.geometry.coordinates);

const map = new mapboxgl.Map({
  container: "map", // Ensure there's an HTML element with id="map"
  style: "mapbox://styles/mapbox/streets-v12",
  center: listing.geometry.coordinates, // [lng, lat]
  zoom: 9,
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>EXACT LOCATION WILL BE PROVIDED AFTER BOOKING!</p>`
    )
  )
  .addTo(map);
