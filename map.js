let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -28, lng: 137 },
  });
  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  map.data.loadGeoJson(
    "https://github.com/VVLidl/HHK2022T4/blob/main/646873.geojson"; "https://github.com/VVLidl/HHK2022T4/blob/main/map.json"
  );
}

window.initMap = initMap;