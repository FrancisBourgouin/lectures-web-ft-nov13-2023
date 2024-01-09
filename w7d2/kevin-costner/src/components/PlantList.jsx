import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants, updateWateredDate } = props;

  const parsedPlants =
    Array.isArray(plants) &&
    plants.map((plant) => (
      <PlantListItem
        {...plant}
        updateWateredDate={() => updateWateredDate(plant.id)}
        key={plant.id}
      />
    ));

  return (
    <section className="PlantList">
      <h1>All the plants</h1>
      {parsedPlants}
    </section>
  );
}
