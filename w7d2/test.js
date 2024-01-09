const plant1 = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2023-12-20",
  wateringInterval: 7,
};
const plant2 = {
  id: "2",
  type: "Paper or real?",
  name: "Tulips",
  lastWatered: "2023-12-10",
  wateringInterval: 4,
};
const plant3 = {
  id: "3",
  type: "Blossoms are nice",
  name: "Cherry",
  lastWatered: "2024-01-01",
  wateringInterval: 60,
};
const plant4 = {
  id: "4",
  type: "GIMME THAT",
  name: "Money Tree",
  lastWatered: "2022-01-20",
  wateringInterval: 1000,
};

const plantsArr = [plant1, plant2, plant3, plant4];

const plantsObj = { 1: plant1, 2: plant2, 3: plant3, 4: plant4 };

const waterAllPlants = (plants) => {
  const updatedPlants = { ...plants };

  for (const plantId in plants) {
    const updatedPlant = { ...plants[plantId] };

    updatedPlant.lastWatered = new Date().toLocaleDateString();

    updatedPlants[plantId] = updatedPlant;
  }

  return updatedPlants;
};

const result = waterAllPlants(plantsObj);

console.log(result);
console.log(plantsObj);
