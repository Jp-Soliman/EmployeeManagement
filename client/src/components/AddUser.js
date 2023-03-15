import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const AddUser = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [employment, setEmployment] = useState('')
    const [age, setAge] = useState()
    const navigate = useNavigate()

    const saveUser = async (e) => {
        e.preventDefault()
        try{
            await axios.post('http://localhost:5000/users', {
                firstName,
                lastName,
                employment,
                age
            });
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    };

    return(
        <>
        <div style={{margin: '5%'}} >
        <Link style={{margin:'0% 0% 1% 83%'}} class="button" to='/'>Go back</Link>
            <h4 class="subtitle is-3" > Add User </h4>
            <form onSubmit={saveUser}>
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
                <button style={{margin:'2% 0% 1% 1%'}} class="button" type='submit'>Save</button>
            </form>
        </div>
        </>
    )

}

export default AddUser;