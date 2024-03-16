import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";
import L from "leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';

function Pin({ item }) {
  const defaultIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [25, 40],
    iconAnchor: [12, 41],
  });

  return (
    <Marker position={[item.latitude, item.longitude]} icon={defaultIcon}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
