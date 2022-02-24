import './App.css';
import { useState } from 'react';
import{Switch,Route} from "react-router-dom";

import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import WhyBike24 from './pages/WhyBike24';
import Safety from './pages/Safety'
import Signup from './pages/Register.js'
import {Booking,Bookingdetails} from './pages/fleetandpricing';
import Payments from './pages/Payments';
import Home from './pages/Home';
import Login from './pages/Log.js';
import { API_URL } from './pages/global_constants';
function App() {
  const [data,setData]=useState();
  const history=useHistory();


  const bikebook = () => {

    const token = localStorage.getItem("x-auth-token");

    if (!token) {
        history.push("/fleetandpricing");
    }
fetch(`${API_URL}/fleetandpricing`,{ method: "GET",
headers: {
    "x-auth-token": token
}
}).then((res)=>res.json())
.then((a)=>{
    console.log("a",a)
setData(a)
});
};
console.log("data",data)
useEffect(bikebook, []);

console.log("gh",data);

  return (
    
    <Paper elevation={0} >
  <div className="App">

  <AppBar position="static" style={{color:"blue",marginBottom:"0px",backgroundColor:"black"}}>
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


<Button  style={{marginRight:"10px"}}variant="text"color="inherit" onClick={()=>history.push("/signup")}>
Sign up </Button>
<Button  style={{marginRight:"10px"}}variant="text"color="inherit" onClick={()=>history.push("/login")}>
Login </Button>
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
  <Route path="/login">
     <Login/>
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
