import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(function () {
    async function fetchUsers() {
      const res = await fetch("https://fakestoreapi.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Foydalanuvchilar</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Ism</th>
            <th>Email</th>
            <th>Shahar</th>
          </tr>
        </thead>
        <tbody>
          {users.map(function (user) {
            return (
              <tr key={user.id}>
                <td>
                  {user.name.firstname} {user.name.lastname}
                </td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
