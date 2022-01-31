import './App.css';
import { useState } from 'react';
import{Switch,Route,Redirect} from "react-router-dom";

import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useEffect } from 'react';
import {useHistory,useParams} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WhyBike24 from './pages/WhyBike24';
import Safety from './pages/Safety'
import Signup from './pages/Signup'
import {Booking,Bookingdetails} from './pages/fleetandpricing';
import Payments from './pages/Payments';
import Home from './pages/Home';
function App() {
  const [data,setData]=useState();
  const history=useHistory();
const [mode,setMode]=useState("dark")
const theme = createTheme({
  palette: {
    mode: mode,
  },
});

useEffect(()=>{
  fetch("https://61681515ba841a001727c589.mockapi.io/bike/")
  .then((data)=>data.json())
  .then((mvs)=>{
    setData(mvs);
    console.log("data",data)
  });
},[]);
console.log("gh",data);

  return (
    <ThemeProvider theme={theme}>
    <Paper elevation={0} >
  <div className="App">

  <AppBar position="static" style={{color:"blue",marginBottom:"20px",backgroundColor: "rgba(255, 165, 0, 0)"}}>
    <Toolbar variant="dense">
      <h3>Bike24</h3>
      <Button variant="text"color="inherit" onClick={()=>history.push('/')}>
Home</Button>
<Button variant="text"color="inherit" onClick={()=>history.push("/WhyBike24")}>
WhyBike24</Button>
<Button variant="text"color="inherit" onClick={()=>history.push("/fleetandpricing")}>
Fleet and pricing</Button>
<Button variant="text"color="inherit" onClick={()=>history.push("/Safety")}>
Safety</Button>

<Button  style={{marginLeft:"auto"}}variant="text"color="inherit" onClick={()=>setMode(mode==="light"?"dark":"light")}>
Light mode </Button>
<Button  style={{marginRight:"10px"}}variant="text"color="inherit" onClick={()=>history.push("/signup")}>
Sign up </Button>
  </Toolbar>
  </AppBar>
 
<Switch>
<Route exact path="/">
    <Home/>
</Route>
<Route path="/WhyBike24">
  <WhyBike24/>
  </Route>
  <Route path="/fleetandpricing/:id">
  <Bookingdetails/>
  </Route>
    <Route path="/fleetandpricing">
      
  <Booking/>
    </Route>

    <Route path="/Safety">
      <Safety/>
    </Route>
    <Route path="/signup">
      <Signup/>
  </Route>
    <Route path="/payments">
      <Payments/>
  </Route>
 
  <Route path="**">
<Notfound/>
  </Route>
  </Switch>

</div>
</Paper>
</ThemeProvider>
)
}
function Notfound(){

  return(
    <div className="notfound">
<img src="https://media.istockphoto.com/vectors/website-error-404-page-not-found-vector-id648691906?k=6&m=648691906&s=612x612&w=0&h=M4wSWXwfhWw60q0k_p2xiQWeF1XLZCbUCdL43Z-6bOc="/>
    </div>
  )
}
  

export default App;
