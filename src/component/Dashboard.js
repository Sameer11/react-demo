import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'
import { useHistory, Redirect } from 'react-router-dom'
import "./Login.css";

export default function Dashboard() {
    const [error, setError] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            let loggedUser = JSON.parse(localStorage.getItem('user'))
            let userId = loggedUser.role !== 'ADMIN' ? loggedUser.id : ''
            // setUserRole(loggedUser.role)
            let data = await axios.get(`http://localhost:3100/private/users/${userId}`);
            setUsers(data.data.users);
        })();
    }, []);
    

    return (
        <div className="Dashboard">
        <h3>User List</h3>
        <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
        </tr>
        {users.map(user => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
        </table>
        </div>
    );
}