import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Avatar, Grid,Paper,TextField,Checkbox,FormControlLabel, Button, Typography,Link} from '@mui/material';
function Signin() {
    const paperstyle={padding:20,height:'70vh',width:'300px',margin:"20px auto"}
    const avatarstyle={backgroundColor:"green"}
    const rememstyle={marginRight:130}
    const btstyle={margin:'8px 0'}
  return (
  <div>
      <Grid>
      <Paper elevation={10}style={paperstyle} >
          <Grid align='center'>
      <Avatar  style={avatarstyle}><LockOutlinedIcon/></Avatar>
      <h2> Sign in</h2>
      </Grid>
      <TextField id="standard-basic" label="username" placeholder="enter username" variant="standard" fullWidth required />
      <TextField id="standard-basic" label="password" placeholder='enter password' type="password" variant="standard" fullWidth required />
      
  <FormControlLabel
style={rememstyle}
control={
  <Checkbox
   name="checkedB"
   color="primary"
   />
   } label="Remember me" />

  <Button type="Submit" color="primary"  variant="contained" fullWidth>SIGN IN</Button>
        
        <Typography fullWidth>
            <Link href="#">Forgot password?</Link>
            </Typography>Do you have an account ?
            <Typography>
            <Link href="#">Signup?</Link>
            </Typography> 
             </Paper>
      </Grid>
  </div>);
}

export default Signin;
