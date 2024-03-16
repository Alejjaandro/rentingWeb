import { listData } from "../../lib/dummydata";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const data = listData;
  const propertiesToSell = data.filter((item) => item.type === "buy");
  const propertiesToRent = data.filter((item) => item.type === "rent");

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  }

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <div className="titleButtons">
              <button>Update Profile</button>
              <button className="logoutButton" onClick={() => logout()}>Logout</button>
            </div>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>
              Username: <b>{user.username}</b>
            </span>
            <span>
              E-mail: <b>example@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List properties={propertiesToSell}/>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List properties={propertiesToRent}/>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
