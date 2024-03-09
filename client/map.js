// OSRS World Map link (8793x4993)
let osrsMapLink = 'https://cdn.runescape.com/assets/img/external/oldschool/2023/newsposts/2023-07-28/osrs_world_map_july13_2023.png';

var map = L.map('map', {
    crs: L.CRS.Simple, // Set the coordinate reference system
});
let imageBounds = [[0,0], [500,500]];
L.imageOverlay(osrsMapLink, imageBounds).addTo(map);

map.fitBounds(imageBounds);