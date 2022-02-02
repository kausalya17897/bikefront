import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Avatar, Grid,Paper,TextField,Checkbox,FormControlLabel, Button, Typography,Link} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Register() {
    const paperstyle={padding:20,height:'70vh',width:'300px',margin:"20px auto"}
    const avatarstyle={backgroundColor:"green"}
    const rememstyle={marginRight:130}
    const btstyle={margin:'8px 0'}
  return (<div>
       <Grid>
      <Paper elevation={20}style={paperstyle} >
          <Grid align='center'>
      <Avatar  style={avatarstyle}><AddCircleOutlineIcon/></Avatar>
      <h2> Sign Up</h2>
      
      </Grid>
      <TextField id="standard-basic" label="username" placeholder="Name" variant="standard" fullWidth required />
      <TextField id="standard-basic" label="email" placeholder='Email' type="email" variant="standard" fullWidth required />
      <FormControl>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
    </FormControl>
</FormControl>
      <TextField id="standard-basic" label="phonenumber" placeholder='Phone Number' type="number" variant="standard" fullWidth required />
      <TextField id="standard-basic" label="password" placeholder='Password' type="password" variant="standard" fullWidth required />
      <TextField id="standard-basic" label="Confirm password" placeholder='Confirm Password' type="password" variant="standard" fullWidth required />

  <FormControlLabel
control={
  <Checkbox
   name="checkedA"
   color="primary"
   fullWidth/>
   } label="Accept the terms and conditions" />
   

  <Button type="Submit" color="primary"  variant="contained" fullWidth>SIGN Up</Button>
       
             </Paper>
      </Grid>
  </div>);
}
  

export default Register;
