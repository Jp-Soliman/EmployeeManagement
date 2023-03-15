import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserList = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users')
        setUser(response.data)
    };

    const deleteUser = async (id) => {
        try{
            await axios.delete(`http://localhost:5000/users/${id}`)
            getUsers();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <div style={{margin: '30px'}}>
        <Link to='add' class="button" style={{margin:'0% 0% 1% 85%'}}>Add User</Link>
        <h4 class="subtitle is-3" > List of Users </h4>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Employment</th>
                    <th>Age</th>
                    <th>Actions:</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={user._id}>
                        <td>{index + 1}</td>
                        <td>{user.firstName} {user.lastName}</td>
                        <td>{user.employment}</td>
                        <td>{user.age}</td>
                        <td>
                            <Link class="button" to={`edit/${user._id}`}>Edit</Link>
                            <button class="button" onClick={() => deleteUser(user._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </>
    )

}

export default UserList;