import React, {useState, useEffect} from "react";

import "./users.scss"

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch('/users/0/5')
      .then(data => data.json())
      .then(data => setUsers(data))
  },[]);

  return(
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => <li key={user.id}>{user.first_name}</li>)}
      </ul>
    </div>
  );
};

export default Users;
