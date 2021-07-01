import React, { useState } from 'react';

export default function RadioButton() {
   const [mind,setMind]=useState('');
   const handleChange=(e)=>{
       setMind( e.target.value);    }

    return (
      <div>
         <form>
             <input type="radio" value="an inner voice." id="one"
               onChange={handleChange} name="mind" />
             <label htmlFor="one">an inner voice.</label> <br></br>

            <input type="radio" value="a mush of abstracted senses." id="two"
              onChange={handleChange} name="mind"/>
            <label htmlFor="two">a mush of abstracted senses</label> <br></br>

            <input type="radio" value="a bit of both." id="three"
              onChange={handleChange} name="mind"/>
            <label htmlFor="three">a bit of both</label>
         </form>
         <p className="list">You mind is {mind}</p>
      </div>
    );
}