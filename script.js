document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize map on Vaughan
  const map = L.map('map').setView([43.8372, -79.5083], 13);

  // 2. OpenStreetMap backup basemap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  // 3. York Region WMS base URL
  const wmsUrl = 'https://ww3.yorkmaps.ca/arcgis/services/WMS/YorkRegion_OrthoImages_WMS/mapserver/wmsserver';
  const wmsModern = 'https://ww3.yorkmaps.ca/arcgis/services/WMS/YorkRegion_OrthosImages_2024_WMS/mapserver/wmsserver';
  // 4. Map each dropdown option to its WMS sub-layer index
  const yearLayers = {
    '1954': L.tileLayer.wms(wmsUrl, { layers: '0', format: 'image/png', transparent: true, version: '1.1.1' }),
    '1970': L.tileLayer.wms(wmsUrl, { layers: '1', format: 'image/png', transparent: true, version: '1.1.1' }),
    '1978': L.tileLayer.wms(wmsUrl, { layers: '2', format: 'image/png', transparent: true, version: '1.1.1' }),
    '1988': L.tileLayer.wms(wmsUrl, { layers: '3', format: 'image/png', transparent: true, version: '1.1.1' }),
    '1995': L.tileLayer.wms(wmsUrl, { layers: '4', format: 'image/png', transparent: true, version: '1.1.1' }),
    '1999': L.tileLayer.wms(wmsUrl, { layers: '5', format: 'image/png', transparent: true, version: '1.1.1' }),
    '2024': L.tileLayer.wms(wmsModern, { layers: '0', format: 'image/png' transparent: true, version: '1.1.1' }),
  };

  // 5. Display 1954 by default on load
  let activeLayer = yearLayers['1954'].addTo(map);

  // 6. Connect to dropdown element: <select id="year-select">
  const dropdown = document.getElementById('year-select');

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
