//Note: You do NOT need to create an external JS file for this project despite any instructions you may see in Canvas. This file, app.js, is the only external JS file you need.



// Create map                                                       
const myMap = L.map('map', {
    center: [48.868672, 2.342130],
    zoom: 12,
});

// Add openstreetmap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: '15',
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Note: Replace 'https://.tile.openstreetmap.org///.png' with 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' in this copy/paste part in the Canvas activity instructions

// Create and add a geolocation marker
const marker = L.marker([48.87007, 2.346453])
marker.addTo(myMap).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()

// Draw the 2nd arrondissement
const latlong = [                                         
[48.863368120198004, 2.3509079846928516],
[48.86933262048345, 2.3542531602919805],
[48.87199261164275, 2.3400569901592183],
[48.86993336274516, 2.3280142476578813], 
[48.86834104280146, 2.330308418109664]

]
const polygon = L.polygon(latlngs, {
    color: 'blue',
    fillOpacity: 0.0
}).addTo(myMap)                                         







// Metro station markers
const rS = L.marker([48.866200610611926, 2.352236247419453],{icon: redPin}).bindPopup('RÃ©aumur-SÃ©bastopol')






// Create red pin marker
const redPin = L.icon({
    iconUrl: './assets/red-pin.png',
    iconSize: [38, 38],
    iconAnchor: [19,38],
    popupAnchor: [0,-38],
})