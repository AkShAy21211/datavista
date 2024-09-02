import React, { useEffect, useState } from "react";
import Card from "../components/user/Card";
import { getAllUsers } from "../api";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await getAllUsers();
      
      if (response.length) {
        setUsers(response);
        setLoading(false);
      } else {
        setUsers([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    // cleanup function
    return () => {
      //
    };
  }, []);
  return (
    <div className="hove-container">
      <div className="grid-view">
        {users.map((user, i) => (
          <Card  key={user.id} isLoading={isLoading} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
