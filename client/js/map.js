// OSRS World Map link (8793x4993)
let osrsMapLink = 'https://cdn.runescape.com/assets/img/external/oldschool/2023/newsposts/2023-07-28/osrs_world_map_july13_2023.png';

var map = L.map('map', {
    crs: L.CRS.Simple, // Set the coordinate reference system
    minZoom: 1,
    maxZoom: 20
});
let imageBounds = [[0,0], [1000,1000]];
L.imageOverlay(osrsMapLink, imageBounds).addTo(map);

map.fitBounds(imageBounds);
map.setView([445, 750], 3);