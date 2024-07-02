import React from "react";
import PlantCard from "./PlantCard";
// import { Card } from "semantic-ui-react";

function PlantList({plantList,search}) {
// filtering through plants to locate the ones that are used in search//
  const searchedPlants = plantList.filter((plants)=> {
    if(plants.name.toLowerCase().includes(search.toLowerCase())){
      return true
    }
    return false
  } )
  // console.log(searchedPlants)
  const plantComponents = searchedPlants.map((plants)=> {
    return <PlantCard key={plants.id} plants={plants} name={plants.name} price ={plants.price} deletePlant= {plants.deletePlant}/>
  })
// console.log(plantComponents)
  return (
    <div>
    {plantComponents}
    </div>
    
 );
}
//  <Card.Group itemsPerRow={6}>
//     {plantComponents}
//     </Card.Group> 
export default PlantList;

