var latitude = 27.64048575977555; 
var longitude = 30.8543909926359;

var map = L.map('map').setView([latitude, longitude], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

var marker = L.marker([latitude, longitude]).addTo(map);

