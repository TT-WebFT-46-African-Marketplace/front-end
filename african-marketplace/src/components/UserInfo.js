import React from "react";
import { axiosWithAuth } from "./../helpers/axiosWithAuth";

import "./UserInfo.css";

const UserInfo = () => {
  const [userData, setUserData] = React.useState({});

  const logout = () => {
    localStorage.clear("token");
    // history.push("/login");
  };

  React.useEffect(() => {
    axiosWithAuth()
      .get("")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="user-info">
      <h1>Hey, {userData.username}!</h1>
      <h3>{userData.plants}</h3>
      <p>Welcome! You now have access to see what everyone is posting!</p>

      <div>
        <button
          href="https://tender-brattain-6749f1.netlify.app/"
          type="button"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
