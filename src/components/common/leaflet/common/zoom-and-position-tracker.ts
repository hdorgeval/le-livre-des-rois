import React from 'react';
import { useMapEvent } from 'react-leaflet';
import { LatLngLiteral, Map } from 'leaflet';

export interface ZoomAndPositionTrackerProps {
  onCenterChanged: (center: LatLngLiteral) => void;
  onZoomChanged: (zoom: number) => void;
}

export const ZoomAndPositionTracker: React.FC<ZoomAndPositionTrackerProps> = ({
  onCenterChanged,
  onZoomChanged,
}) => {
  useMapEvent('zoomend', (event) => {
    const map = event.target as Map;
    const zoom = map.getZoom();
    onZoomChanged(zoom);
  });

  useMapEvent('moveend', (event) => {
    const map = event.target as Map;
    const center = map.getCenter();
    onCenterChanged(center);
  });

  return null;
};
