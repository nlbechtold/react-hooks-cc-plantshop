
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import React, { useEffect, useState } from "react";

function PlantPage() {
  const [plantList, setPlantList] = useState([])
  // console.log(plantList)
  const [search, setSearch] = useState("")
  // console.log(search)
  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then(r=>r.json())
    .then(data=>setPlantList(data))
  },[])
  // addPlant({})
  function addPlant(newPlant){
    fetch('http://localhost:6001/plants',{
      method: "POST",
      headers:{
        "Content-Type":"application/JSON"
      },
      body: JSON.stringify(newPlant)
    })
    .then(r=>r.json())
    .then(data=>{
      // (data)
      const newPlantArr = [...plantList,data]
      setPlantList(newPlantArr)
    })
  }

  function deletePlant (id) {
    fetch (`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then(r=> r.json())
      .then(() => {
        setPlantList(values => {
          return values.filter(item => item.id !== id)
        })
      })

  }

  return (
    <div>
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search setSearch= {setSearch} />
      <PlantList search={search} setPlantList= {setPlantList} plantList={plantList} deletePlant={deletePlant}/>
    </main>
    </div>
  );
}

export default PlantPage;
