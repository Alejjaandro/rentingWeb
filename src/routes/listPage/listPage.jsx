import { listData } from "../../lib/dummydata";
import "./listPage.scss";
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card"
import Map from "../../components/map/Map";
import { useLocation } from "react-router-dom";

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

  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter filters={filters}/>
        {filteredData.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
    <div className="mapContainer">
      <Map items={filteredData} />
    </div>
  </div>;
}

export default ListPage;
