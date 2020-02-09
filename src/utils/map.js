import 'leaflet/dist/leaflet.css';
import $L from 'leaflet';

// 引入 leaflet.markercluster
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';

// 解决默认 maker 无法显示的问题
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = $L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
$L.Marker.prototype.options.icon = DefaultIcon;

const createMap = (divId, options) => {
  let map = $L.map(divId, options);
  return map;
};

const createTileLayer = async (map, url, options) => {
  let tileLayer = await $L.tileLayer(url, options);
  tileLayer.addTo(map);
  return tileLayer;
};

const createMakerCluster = () => {
  return $L.markerClusterGroup();
};

const createLatLng = (x, y) => {
  return $L.latLng(x, y);
};

const createMakerByLatlng = (latlng, options) => {
  return $L.marker(latlng, options);
};

const createPopup = options => {
  let popup = $L.popup(options);
  return popup;
};

const createUserByXY = (x, y, options = {}) => {
  let marker = $L.marker($L.latLng(x, y), options);
  // marker.addTo(map);
  return marker;
};

const createMakerByXY = (coordinate, options = {}) => {
  return $L.marker($L.latLng(coordinate[1], coordinate[0]), options);
};

export default {
  createMap,
  createTileLayer,
  createMakerCluster,
  createLatLng,
  createMakerByLatlng,
  createPopup,
  createUserByXY,
  createMakerByXY
};
