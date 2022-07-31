import * as React from 'react';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: ""
    });
    let name;
    let value;
    const change = (e) => {
        name = e.target.name;
        value = e.target.value
        setUser({ ...user, [name]: [value] });
    };
    const postData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;
        const res = await fetch( '/register ',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });
        const data = await res.json();
        console.log(data);
        if(data.status === 422 || !data)
        {
            window.alert("Invalid Registration");
        }
        else
        {
            window.alert("Registered Successfully")
        }
    }
    return (
        <>
            <Box style={{ margin: "auto", marginTop: "1rem", width: "100%" }}>
                <form method='POST' style={{ margin: "auto", width: "60%", padding: "1rem", boxShadow: "1px 1px 10px 1px black", borderRadius: "8px" }} >
                    {/* <h3 style={{ textAlign: "center", textShadow: "1px 1px 5px gray" }}>Signup</h3> */}
                    <Button style={{ width: "100%", padding: "1rem", fontSize: "1rem" }} variant="outlined" color='success' startIcon={<GoogleIcon />}>Sign Up With Google</Button>
                    <TextField id="outlined-basic" onChange={change} name="name" value={user.name} label="Name" margin='normal' style={{ width: "100%" }} variant="outlined" />
                    <TextField id="outlined-basic" onChange={change} name="email" value={user.email} label="Email" margin='normal' style={{ width: "100%" }} fullWidth variant="outlined" />
                    <TextField id="outlined-basic" onChange={change} name="phone" value={user.phone} label="Phone" margin='normal' style={{ width: "100%" }} fullWidth variant="outlined" />
                    <TextField id="outlined-basic" onChange={change} name="work" value={user.work} label="Work" margin='normal' style={{ width: "100%" }} fullWidth variant="outlined" />
                    <TextField id="outlined-basic" onChange={change} name="password" value={user.password} label="Password" margin='normal' style={{ width: "100%" }} fullWidth variant="outlined" />
                    <TextField id="outlined-basic" onChange={change} name="cpassword" value={user.cpassword} label="Confirm Password" margin='normal' style={{ width: "100%" }} fullWidth variant="outlined" />
                    <Button variant="contained" type='submit' onClick={postData} color="success" style={{ width: "100%", padding: "1rem", fontSize: "1rem", marginTop: "15px" }}>REGISTER</Button>
                </form>
            </Box>
        </>
    );
};
export default Signup;