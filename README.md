# Vaughan Historical Aerials Viewer

Interactive, Leaflet-based viewer for historical aerial imagery of the City of Vaughan, Ontario.

This site lets people explore aerial photographs dating back to 1954 using York Region WMS layers. It was built by a single developer to provide a lightweight, easy-to-use alternative to the official York Region map viewer.

## Key features

- View aerial imagery of Vaughan (1954 → present) using York Region WMS layers
- Year selector button (default year: 2025) with a dropdown to pick a year
- Standard map navigation (pan, zoom) powered by Leaflet
- Lightweight HTML, CSS, and JavaScript implementation for better mobile stability

## How it works

- The site uses Leaflet to display a base map and overlay York Region WMS layers for aerial imagery.
- A button shows the current year (default: 2025). Click it to open a dropdown, choose a year, and the selected aerial layer will load.
- Navigation and controls behave like typical web mapping applications (drag to pan, scroll or buttons to zoom).

## Usage

- Go to vaughan-aerials.github.io on a browser 
- Open `index.html` in a browser or view the site via GitHub Pages (this repo is set up as a GitHub Pages site).
- On mobile, the site aims to be more stable than the official York Region viewer, but performance depends on device and connection.

## Data & attribution

- The aerial imagery layers are provided via York Region WMS services. This project uses those WMS layers to display imagery but is not maintained by York Region.

## Not affiliated

This project is NOT affiliated with York Region or any government organization. It is a one-developer, community-focused viewer provided "as-is" to make Vaughan's historical aerials more accessible to the public.

## Tech stack

- HTML, CSS, JavaScript
- Leaflet (mapping library)
- York Region WMS layers (imagery source)

## Troubleshooting & notes

- If imagery does not load for a selected year, check your network connection — the site fetches data from the York Region WMS servers.
- If a layer crashes the browser on certain mobile devices, try a different browser or reduce browser memory usage.

## Contributing

- This is a small project maintained by one developer. If you'd like to contribute (fixes, improvements, accessibility tweaks), open an issue or a pull request.

## License
Copyright © 2026 Vaughan Aerials. All rights reserved
## Contact

- Repo: https://github.com/Vaughan-aerials/vaughan-aerials.github.io

---
Copyright © 2026 Vaughan Aerials. All rights reserved
 
