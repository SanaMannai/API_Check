import { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {

  const [allUsers, setAllUser] = useState([]);

  
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((data) =>
      setAllUser(data)
    );
  }, []);
  return (
    <>
      <p className="list-name">List Of User Info</p>
      {allUsers.data === undefined ? (
        <p className="loading">Loading Users...</p>
      ) : (
        <div className="all-user">
          {allUsers?.data.map((user, i) => (
            <div className="box" key={i}>
              <h1 className="user-name">
                Name: <span>{user.name}</span>
              </h1>
              <h3 className="city">
                City: <span>{user.address.city}</span>
              </h3>
              <h4 className="street">
                Street: <span>{user.address.street}</span>
              </h4>
              <h5 className="email">
                Email: <span>{user.email}</span>
              </h5>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UserList;
