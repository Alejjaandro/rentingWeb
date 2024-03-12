import { listData } from "../../lib/dummydata";
import "./listPage.scss";
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card"
import Map from "../../components/map/Map";

function ListPage() {
  const data = listData;

  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get("type");
  const location = urlParams.get("location") === "null" ? null : urlParams.get("location");
  const minPrice = urlParams.get("minPrice") === "null" ? null : urlParams.get("minPrice");
  const maxPrice = urlParams.get("maxPrice") === "null" ? null : urlParams.get("maxPrice");

  const filteredData = data.filter((item) => {
    if (type) {
      if (item.type !== type.toLocaleLowerCase()) return false;
    }
    if (location) {
      if (item.location !== location) return false;
    }
    if (minPrice) {
      if (item.price < minPrice) return false;
    }
    if (maxPrice) {
      if (item.price > maxPrice) return false;
    }

    return true;
  });

  console.log(filteredData);

  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter type={type} location={location} maxPrice={maxPrice} minPrice={minPrice}/>
        {filteredData.map(item=>(
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
    <div className="mapContainer">
      <Map items={filteredData}/>
    </div>
  </div>;
}

export default ListPage;
