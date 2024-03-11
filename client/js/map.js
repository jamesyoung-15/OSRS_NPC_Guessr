// OSRS World Map link (8793x4993)
let osrsMapLink = 'https://cdn.runescape.com/assets/img/external/oldschool/2023/newsposts/2023-07-28/osrs_world_map_july13_2023.png';

// create leaflet coordinate reference system map
let map = L.map('map', {
    crs: L.CRS.Simple, // Set the coordinate reference system
    minZoom: 1,
    maxZoom: 20
});
// create approximate boundaries
let imageBounds = [[0,0], [1000,1000]];

// create marker
let marker = L.marker([445, 750])
  .addTo(map);

// create marker on map click
let onMapClick = (e) => {
    let latitude = e.latlng.lat; // Get the latitude of the clicked point
    let longitude = e.latlng.lng; // Get the longitude of the clicked point

    // Create a marker at the clicked location
    marker.setLatLng([latitude, longitude]);
    console.log("You clicked the map at " + e.latlng.toString())
}




L.imageOverlay(osrsMapLink, imageBounds).addTo(map);
map.fitBounds(imageBounds);
map.setView([445, 750], 3);
map.on('click', onMapClick);