import React from 'react';
import { useHistory } from 'react-router-dom';
  import Colorbox from './Colorbox';
export default function Home(){
  const  history=useHistory();
  return (
  <div className="Home">
     
    <div className='journey'>
<select placeholder="place" name="place" id="place" required>
    <option placeholder="place" value="place"></option>
  <option value="Chennai">Chennai</option>
  <option value="Coimbatore">Coimbatore</option>
  <option value="Madurai">Madurai</option>
  <option value="Bangalore">Bangalore</option>
</select>
<input type="datetime-local" required></input>
<input type="datetime-local" required></input>    
<button type="submit" onClick={()=>{history.push("/fleetandpricing")}}>RIDE NOW</button>  

</div>
  
  </div>)
}
