export default function WeekSlider({ week, setWeek }) {
  function handleChange(e) {
    setWeek(e.target.value);
  }
  return (
    <div>
      <h2>Week</h2>
      <input
        type="range"
        min="1"
        max="3"
        value={week}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
