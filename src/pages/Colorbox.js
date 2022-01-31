import React from 'react';
import { useState } from 'react';
export default function Colorbox() {
    const [color,setColor]=useState()
    const styles={backgroundColor:color}
  return (<div>
<input 
onChange={(a)=>setColor(a.target.value)}
style={styles}/>
  </div>)
}
