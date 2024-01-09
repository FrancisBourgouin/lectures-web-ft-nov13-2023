export default function Header(props) {
  const { amount } = props;

  return (
    <header className="Header">
      <h1>Super watering app of destiny!</h1>
      <h2>Helping {amount} plants from dehydration</h2>
    </header>
  );
}
