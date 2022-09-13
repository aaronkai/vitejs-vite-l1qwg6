export default function WeekPicker({ week, setWeek }) {
  function handleClick(value: number) {
    setWeek(value - 1);
  }
  return (
    <div>
      <h2>Week</h2>
      <div>
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
      </div>
    </div>
  );
}
