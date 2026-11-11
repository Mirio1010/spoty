/**
 * Shared Leaflet raster basemap.
 *
 * CARTO Positron (`basemaps.cartocdn.com/light_all`) has required an API key
 * since 2026-09-25; requests without one render "API KEY REQUIRED" tiles.
 * OSM raster tiles do not need a key. Do not point this back at CARTO unless
 * a key is stored in env and appended as `?key=`.
 */
export const OSM_TILE_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

export const OSM_TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
