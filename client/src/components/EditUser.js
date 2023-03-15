import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [employment, setEmployment] = useState('')
    const [age, setAge] = useState()
    const navigate = useNavigate()
    const { id } = useParams();

    useEffect(() => {
        getUserById();
    },[]);
    
    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`)
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmployment(response.data.employment);
        setAge(response.data.age);
    };

    const updateUser = async (e) => {
        e.preventDefault()
        try{
            await axios.patch(`http://localhost:5000/users/${id}`, {
                firstName,
                lastName,
                employment,
                age
            });
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    };

    return(
        <>
        <div style={{margin: '5%'}} >
            <Link style={{margin:'0% 0% 1% 85%'}} class="button" to='/'>Go back</Link>
            <h4 class="subtitle is-3" > Edit a User</h4>
            <form onSubmit={updateUser}>
            <label>First Name</label>
                <input
                    class="input is-info"
                    type='text'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} 
                    placeholder="First name"
                    required
                />
                <label>Last Name</label>
                <input
                    class="input is-info"
                    type='text'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} 
                    placeholder="Last name"
                    required
                />
                <label>Employment Status</label>
                <input
                    class="input is-info"
                    type='text'
                    value={employment}
                    onChange={(e) => setEmployment(e.target.value)} 
                    placeholder="Employment"
                    required
                />
                <label>Age</label>
                <input
                    class="input is-info"
                    type='text'
                    value={age}
                    onChange={(e) => setAge(e.target.value)} 
                    placeholder="Age"
                    required
                /><br></br>
                <button style={{margin:'2% 0% 1% 1%'}} class="button" type='submit'>Update</button>
            </form>
        </div>
        </>
    )

}

export default EditUser;