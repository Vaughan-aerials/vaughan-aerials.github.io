document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize map on Vaughan
  const map = L.map('map').setView([43.8372, -79.5083], 13);

  // 2. OpenStreetMap backup basemap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 22,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  // 3. York Region WMS base URL
const wmsoptions = {
  format: 'image/png',
  transparent: true,
  version: '1.1.1'
  maxNativeZoom: 18,
  maxZoom: 22
}
  const wmsUrl = 'https://ww3.yorkmaps.ca/arcgis/services/WMS/YorkRegion_OrthoImages_WMS/mapserver/wmsserver';
  // 4. Map each dropdown option to its WMS sub-layer index
  const yearLayers = {
    //'1954': L.tileLayer.wms(wmsUrl, { layers: '0', wmsoptions }),
    '1970': L.tileLayer.wms(wmsUrl, { layers: '1', wmsoptions }),
    '1978': L.tileLayer.wms(wmsUrl, { layers: '5', wmsoptions }),
    '1988': L.tileLayer.wms(wmsUrl, { layers: '9', wmsoptions }),
    '1995': L.tileLayer.wms(wmsUrl, { layers: '13', wmsoptions }),
    '1999': L.tileLayer.wms(wmsUrl, { layers: '17', wmsoptions }),
    // '2002': L.tileLayer.wms(wmsUrl, { layers: '21', wmsoptions }),
    '2005': L.tileLayer.wms(wmsUrl, { layers: '25', wmsoptions }),
    '2012': L.tileLayer.wms(wmsUrl, { layers: '37', wmsoptions }),
    '2025': L.tileLayer.wms(wmsUrl, { layers: '89', wmsoptions })
  };

  // 5. Display 2025 by default on load
  let activeLayer = yearLayers['1970'].addTo(map);

  // 6. Connect to dropdown element: <select id="year-select">
  const dropdown = document.getElementById('left-year-select');

  dropdown.addEventListener('change', (e) => {
    const selectedYear = e.target.value;

    if (activeLayer) {
      map.removeLayer(activeLayer);
    }

    if (yearLayers[selectedYear]) {
      activeLayer = yearLayers[selectedYear].addTo(map);
    }
  });
});
