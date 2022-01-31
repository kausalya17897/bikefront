import React from 'react';
import { useHistory } from 'react-router-dom';
  import Colorbox from './Colorbox';
export default function Home(){
  const  history=useHistory();
  return (
  <div className="Home">
     <h3>Book Now</h3>
    <div className='journey'>
<select placeholder="place" name="place" id="place">
    <option placeholder="place" value="place"></option>
  <option value="Chennai">Chennai</option>
  <option value="Coimbatore">Coimbatore</option>
  <option value="Madurai">Madurai</option>
  <option value="Bangalore">Bangalore</option>
</select>
<input type="datetime-local"></input>
<input type="datetime-local"></input>    
<button onClick={()=>{history.push("/fleetandpricing")}}>RIDE NOW</button>  
<Colorbox/>   
</div>
  
  </div>)
}
