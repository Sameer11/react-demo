import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import "./Login.css";

export default function Profile() {
    const [error, setError] = useState(null);
    const [loggedUser, setLoggedUser] = useState([]);

    useEffect(() => {
        (async () => {
            let loggedUser = JSON.parse(localStorage.getItem('user'))
            // let userId = loggedUser.id
            // let data = await axios.get(`http://localhost:3100/private/users/${userId}`);
            setLoggedUser(loggedUser);
        })();
    }, []);
    

    return (
        <div align="center" className="Profile">
        <h3>Profile</h3>
        <table>
        <tr>
            <th>Name:</th>
            <td>{loggedUser.name}</td>
        </tr>
        <tr>
            <th>Email:</th>
            <td>{loggedUser.email}</td>
        </tr>
        <tr>
            <th>Role:</th>
            <td>{loggedUser.role}</td>
        </tr>
        </table>
        </div>
    );
}