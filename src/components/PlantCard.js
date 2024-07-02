import React, { useState } from "react";
// import { Card } from "semantic-ui-react";

function PlantCard({plants, deletePlant}) {
  
  const [displayButton, setDisplayButton] =useState(true)

  // using state above and using  statement whether the state is true, which will change the text and the color//
  
  let className ;
  
  let buttonText ;
  if (displayButton) {buttonText= 'In Stock'; className = "primary"

  } else {buttonText= 'Out of Stock' ; className = "grey";

  }

  return (

    

  <div>
    <li className="card" data-testid="plant-item">
      <img src={plants.image} alt={"plant name"} />
      <h4>{plants.name}</h4>
      <p>Price: {plants.price}</p>
      <button className={className} onClick={()=>setDisplayButton(!displayButton)}>{buttonText} </button> 
      <button className= "danger" onClick={()=> deletePlant(plants.id)}>Delete</button>
      
      
  </li>
  </div>
  )
}

export default PlantCard;