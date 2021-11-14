import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {

    const [email,setEmail] = useState('');
    const[success, setSuccess] =useState(false);

    //jet get id token verify
    const {token} = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://glacial-island-62102.herokuapp.com/users/admin',{
            method: 'PUT',
            headers:{
                //jwt get id token verify
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                //clear the field
                setEmail('');
                setSuccess(true)
            }
            console.log(data);
        })
        
        e.preventDefault();


    }
    return (
        <div>
            <h2> Make an Admin</h2>
            <form onSubmit ={handleAdminSubmit}>
            <TextField 
            sx={{width: '50%'}}
            label="Email"
             type="email"
             onBlur={handleOnBlur}
              variant="standard" />
            <Button type="submit" variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;