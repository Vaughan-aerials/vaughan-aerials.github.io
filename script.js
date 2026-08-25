// Copyright 2026 lomos technologies
document.addEventListener('DOMContentLoaded', () => {
  if ('connection' in navigator) {
    if (navigator.connection.type === 'cellular') {
    alert("This service is unavailable on cellular data. Please connect to a Wi-Fi network and reload the page.");
    } else {
      // show Warning and does not show tiles
      loadmap()
    }

  } else {
  loadmap()
  }
});
function loadmap() {
    // 1. Initialize map on Vaughan with maxZoom allowed on the map instance
    const map = L.map('map', { maxZoom: 24 }).setView([43.8372, -79.5083], 13);

    // 2. OpenStreetMap backup basemap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 24,
      attribution: '© OpenStreetMap',
      zIndex: 1
    }).addTo(map);

    // 3. Shared WMS options
    const wmsoptions = {
      format: 'image/png',
      transparent: true,
      version: '1.1.1',
      maxNativeZoom: 18, // Native server limit
      maxZoom: 24,        // Allow Leaflet to stretch tiles up to level 22
      zIndex: 1000 // So basemap doesn't overlap with Imagery 
    };

    const wmsUrl = 'https://ww3.yorkmaps.ca/arcgis/services/WMS/YorkRegion_OrthoImages_WMS/mapserver/wmsserver';

    // 4. Map each dropdown option using spread operator (...)
    // Years
    const yearLayers = {
      '1954': L.esri.tiledMapLayer({
        url: 'https://ww2.yorkmaps.ca/arcgis/rest/services/CacheMaps/YR_Imagery1954/MapServer',
        maxZoom: 24,
        maxNativeZoom:18,
        zIndex: 1000
      }),
      '1970': L.tileLayer.wms(wmsUrl, { ...wmsoptions, layers: '1' }),
      '1978': L.tileLayer.wms(wmsUrl, { ...wmsoptions, layers: '5' }),
      '1988': L.tileLayer.wms(wmsUrl, { ...wmsoptions, layers: '9' }),
      '1995': L.tileLayer.wms(wmsUrl, { ...wmsoptions, layers: '13' }),
      '1999': L.tileLayer.wms(wmsUrl, { ...wmsoptions, layers: '17' }),
      '2005': L.tileLayer.wms(wmsUrl, { ...wmsoptions, layers: '25' }),
      '2012': L.tileLayer.wms(wmsUrl, { ...wmsoptions, layers: '37' }),
      '2025': L.tileLayer.wms(wmsUrl, { ...wmsoptions, layers: '89' })
    };

    // 5. Display initial layer on load
    let activeLayer = yearLayers['2025'].addTo(map);

    // 6. Connect to dropdown element
    const dropdown = document.getElementById('left-year-select');

    if (dropdown) {
      dropdown.addEventListener('change', (e) => {
        const selectedYear = e.target.value;

        if (activeLayer) {
          map.removeLayer(activeLayer);
        }

        if (yearLayers[selectedYear]) {
          activeLayer = yearLayers[selectedYear].addTo(map);
        }
      });
    }
  
}
