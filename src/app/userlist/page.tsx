"use client"
import React, { useEffect, useState } from 'react';

const fetchUserList = async () => {
  let response = await fetch("https://dummyjson.com/users");
  let data = await response.json();
  return data.users;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadUsers = async () => {
      const userList = await fetchUserList();
      setUsers(userList);
      setLoading(false);
    };

    loadUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.firstName} {user.lastName}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
