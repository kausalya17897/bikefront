
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Signin from './Signin';
import Register from './Register';
export default function Singinout() {
    const [value,setValue]=React.useState(2)
const handleChange = (event, newValue) => {
    setValue(newValue);
}
const paperstyle={width:340,margin:"20px auto"}
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
    console.log("gdgfh")
  return (
      <Paper style={paperstyle}>
    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
    <Tab label="Sign in" />
    
    <Tab label="Sign out" />
  </Tabs>
  <TabPanel value={value} index={0}>
    
        <Signin/>
      </TabPanel>
      <TabPanel value={value} index={1}>

        <Register/>
      </TabPanel>
    
  </Paper>
  );
}
