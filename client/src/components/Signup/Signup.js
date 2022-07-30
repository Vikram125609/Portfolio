import * as React from 'react';
import { TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
const Signup = () => {
    return (
        <>
            <Box style={{ margin: "auto", marginTop: "1rem", width: "100%" }}>
                <form action="" style={{ margin: "auto", width: "60%", padding: "1rem", boxShadow: "1px 1px 10px 1px black", borderRadius: "8px" }} >
                    {/* <h3 style={{ textAlign: "center", textShadow: "1px 1px 5px gray" }}>Signup</h3> */}
                    <Button style={{ width: "100%", padding: "1rem", fontSize: "1rem" }} variant="outlined" color='success' startIcon={<GoogleIcon />}>Sign Up With Google</Button>
                    <TextField id="outlined-basic" name="name" label="Name" margin='normal' style={{ width: "100%" }} variant="outlined" />
                    <TextField id="outlined-basic" name="email" label="Email" margin='normal' style={{ width: "100%" }} fullWidth variant="outlined" />
                    <TextField id="outlined-basic" name="phone" label="Phone" margin='normal' style={{ width: "100%" }} fullWidth variant="outlined" />
                    <TextField id="outlined-basic" name="work" label="Work" margin='normal' style={{ width: "100%" }} fullWidth variant="outlined" />
                    <TextField id="outlined-basic" name="password" label="Password" margin='normal' style={{ width: "100%" }} fullWidth variant="outlined" />
                    <TextField id="outlined-basic" name="confirm" label="Confirm Password" margin='normal' style={{ width: "100%" }} fullWidth variant="outlined" />
                    <Button variant="contained" type='submit' color="success" style={{ width: "100%", padding: "1rem", fontSize: "1rem" ,marginTop:"15px"}}>REGISTER</Button>
                </form>
            </Box>
        </>
    );
};
export default Signup;