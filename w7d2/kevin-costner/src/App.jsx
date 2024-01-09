import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PlantList from "./components/PlantList";
import Header from "./components/Header";

import { plantsArr, plantsObj } from "./data/plantData";

function App() {
  // useState Hook (React functionality that you "hook" into)
  // Give you a reactive state (everytime the value changes, it will cause the page to rerender)
  // const [count, setCount] = useState(0);

  // PlantList
  // PlantListItem

  const [plants, setPlants] = useState(plantsObj);
  const plantList = Object.values(plants);

  const updateWateredDateArr = (plantId) => {
    const plantToUpdate = plants.find((plant) => plant.id === plantId);
    const plantToUpdateIndex = plants.findIndex((plant) => plant.id === plantId);

    const updatedPlant = { ...plantToUpdate };
    updatedPlant.lastWatered = new Date().toLocaleDateString();

    const updatedPlants = [...plants];
    updatedPlants[plantToUpdateIndex] = updatedPlant;

    setPlants(updatedPlants);
  };

  const updateWateredDate = (plantId) => {
    const plantToUpdate = { ...plants[plantId] };
    plantToUpdate.lastWatered = new Date().toLocaleDateString();

    const updatedPlants = { ...plants, [plantId]: plantToUpdate };

    setPlants(updatedPlants);
  };

  const waterAllPlants = () => {
    const updatedPlants = { ...plants };

    for (const plantId in plants) {
      const updatedPlant = { ...plants[plantId] };

      updatedPlant.lastWatered = new Date().toLocaleDateString();

      updatedPlants[plantId] = updatedPlant;
    }

    setPlants(updatedPlants);
  };

  return (
    <>
      <Header amount={plantList.length} />
      <main>
        <button onClick={waterAllPlants}>WATER EVERYTHING</button>
        <PlantList plants={plantList} updateWateredDate={updateWateredDate} />
      </main>
    </>
  );
}

export default App;
