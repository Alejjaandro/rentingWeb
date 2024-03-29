import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { listData, userData } from "../../lib/dummydata";

function SinglePage() {

  const propertyId = Number(window.location.pathname.split("/")[1]);
  // We extract the property that we want to display from the listData array
  const propertyData = listData.filter((item) => item.id === propertyId)[0];
  propertyData.images[0] = propertyData.img;

  return (

    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={propertyData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{propertyData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{propertyData.address}</span>
                </div>
                <div className="price">$ {propertyData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{propertyData.description}</div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>

          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>

          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{propertyData.size}</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{propertyData.bedroom} Beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{propertyData.bathroom} Baths</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[propertyData]} center={[propertyData.latitude, propertyData.longitude]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SinglePage;
