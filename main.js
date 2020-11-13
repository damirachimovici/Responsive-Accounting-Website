// Initialize and add the map
function initMap() {
    // Your location 42.662914,21.165503
    const loc = { lat: 46.455630, lng: 24.117110 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}