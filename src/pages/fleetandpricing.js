import React, { useEffect,useState } from 'react'

import {useHistory,useParams} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


//export const  API_URL="https://61681515ba841a001727c589.mockapi.io";
export const API_URL="https://rentalappbackend.herokuapp.com";




function Booking(){
    const[data,setData]=useState([]);
    
    
useEffect(()=>{
    fetch(`${API_URL}/fleetandpricing`)
    .then((res)=>res.json())
    .then((a)=>{
        console.log("a",a)
setData(a)
    })
},[])
console.log("data",data)
    return(
        <div>
<div className="booking">
    
    {data.map(({name,poster,id,_id,engine,left,dayprice,weekly,monthly})=>(
     <Bike name={name}
     poster={poster}
     id={_id}
     engine={engine}
     left={left}
     price={dayprice}
     weekly={weekly}
     monthly={monthly}/>
    ))  }
   </div>
</div>
    )
}

function Bike({poster,name,id,engine,left,price}){
    const history=useHistory();
    const styles={color:"white",backgroundColor:"blue"};
    const leftstyles={color:"white",backgroundColor:"green"}

    return(

        <div className='container'>
            <div className='displayflex left'>
        <img src={poster} alt={name} className='poster'/>
       <button className='leftheight' style={leftstyles}>left {left}</button>
        </div>
        <h3>{name}</h3>
       
       {/* <button onClick={()=>setShow(!show)}>{show?"Hide":"Show"}description</button>
        {show?<p className="description">{engine}</p>:""}
    */}
    <div className='displayflex'>
     <h3>Rs:/{price}</h3>
        <IconButton aria-label="info"
      className="moreinfo" 
      color="primary"
      onClick={() =>{console.log("id",id);
      history.push("/fleetandpricing/"+id);
       }}>  <InfoIcon/>
       </IconButton>
       <button onClick={()=>{history.push("/payments")}} className='booknow' style={styles}>BOOK NOW</button>
       </div>
            </div>
            
    )
}

  function Bookingdetails({data}){
    const history=useHistory();
    const[bikedata,setBikedata]=useState([]);
    const {id}=useParams();
    console.log("bikeda",data)
useEffect(()=>{
    fetch(`${API_URL}/fleetandpricing/${id}`,
    {method:"GET",
})
    .then((res)=>res.json())
    .then((a)=>{
        console.log("details",a)
setBikedata(a)
    })
},[]);

console.log("bikedet",bikedata)
const styles={color:"white",backgroundColor:"blue"};
    return(
        
<div className="booking">
<div className='container'>
            {/*<div className='displayflex left'>*/}
        <img src={bikedata.poster} alt={bikedata.name}  className='poster'/>
        <div>
            <h3>Engine:{bikedata.engine}</h3>
            <h3>Fuel:{bikedata.fuelCapacity}</h3> 
        </div>
        <h3>/day:Rs{bikedata.dayprice}</h3>
        <h3>Week:Rs{bikedata.weekly}</h3>
        <h3>Monthly:Rs{bikedata.monthly}</h3>
      
       <button onClick={()=>{history.push("/payments")}} className='booknow' style={styles}>BOOK NOW</button>
        </div>
            
         </div>
    )
}

function  Bikedetails({poster,name,id,engine,left,price,weekly,monthly}){
    const history=useHistory();
    const styles={color:"white",backgroundColor:"blue"};
    const leftstyles={color:"white",backgroundColor:"green"}

console.log("bikedetails")
    return(

        <div className='container'>
            {/*<div className='displayflex left'>*/}
        <img src={poster} alt={name}  className='poster'/>
        {name}
        <h3>{price}</h3>
        <h3>{weekly}</h3>
        <h3>{monthly}</h3>
      
       <button onClick={()=>{history.push("/payments")}} className='booknow' style={styles}>BOOK NOW</button>
        </div>
            
            
    )
}

export {Booking,Bookingdetails}