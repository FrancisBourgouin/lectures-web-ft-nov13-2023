// name, type, .. (everything in the plant obj)

// {
//   id: "1",
//   type: "Monsterous plant",
//   name: "Monstera",
//   lastWatered: "2023-12-20",
//   wateringInterval: 7,
// }

{
  /* <PlantListItem id={1} type="Monsterous plant" name="Monstera" lastWatered="2023-12-20" wateringInterval={7} /> */
}

const checkIfWellWatered = (lastWatered, wateringInterval) => {
  const todayDate = new Date();
  const lastWateredDate = new Date(lastWatered);

  const timeDiff = todayDate.getTime() - lastWateredDate.getTime();
  const timeDiffInDays = timeDiff / 1000 / 86400;

  return wateringInterval > timeDiffInDays;
};

export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval, updateWateredDate } = props;

  const plantListItemStyle = {
    border: "0.5em solid white",
    padding: "1em",
    borderColor: checkIfWellWatered(lastWatered, wateringInterval) ? "green" : "red",
    margin: "1em",
  };

  return (
    <article className="PlantListItem" style={plantListItemStyle}>
      <h1>
        {name} - {type}
      </h1>
      <h2>Last watered on: {lastWatered}</h2>
      <button onClick={updateWateredDate}>Water me!</button>
    </article>
  );
}
