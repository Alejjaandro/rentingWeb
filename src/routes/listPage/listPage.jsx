import { listData } from "../../lib/dummydata";
import "./listPage.scss";
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card"
import Map from "../../components/map/Map";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function ListPage() {
  const data = listData;

  const URL = useLocation();
  const searchParams = new URLSearchParams(URL.search);

  const filters = {
    type: searchParams.get('type'),
    location: searchParams.get('location'),
    minPrice: searchParams.get('minPrice'),
    maxPrice: searchParams.get('maxPrice'),
    bedroom: searchParams.get('bedroom')
  };

  const filteredData = data.filter((item) => {
    if (filters.type && item.type !== filters.type) return false;
    if (filters.location && item.location !== filters.location.toLocaleLowerCase()) return false;
    if (filters.minPrice && item.price < filters.minPrice) return false;
    if (filters.maxPrice && item.price > filters.maxPrice) return false;
    if (filters.bedroom && item.bedroom != filters.bedroom) return false;
    return true;
  });

  const [modal, setModal] = useState(true);
  const [center, setCenter] = useState(null);
  const [zoom, setZoom] = useState(null);

  function handleLocation() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
      setModal(false);
    } else {
      console.log("Geolocation not supported");
    }

    function success(position) {
      console.log(position);
      const newCenter = [position.coords.latitude, position.coords.longitude];
      setCenter(newCenter);
      setZoom(13);
    }
    function error() {
      console.log("Unable to retrieve your location");
    }
  }

  function handleDeny() {
    setModal(false);
    setCenter([52.4797, -1.90269]);
    setZoom(7);
  }

  useEffect(() => { }, [center]);

  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter filters={filters} />
        {filteredData.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>

    <div className="mapContainer">
      {/* Display a modal asking for user location */}
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Allow Location Access?</h3>
            <p>Allow location access to see properties near you</p>
            <button onClick={() => handleLocation()}>Allow</button>
            <button onClick={() => handleDeny()} className="deny">Don&apos;t Allow</button>
          </div>
        </div>
      )}

      {center && <Map items={filteredData} center={center} zoom={zoom} />}
    </div>
  </div>;
}

export default ListPage;
