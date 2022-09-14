export default function TrainingMaxDisplay({ TM }) {
  return (
    <div>
      <h2>Training Maxes</h2>
      <div className="grid grid-cols-4 grid-rows-2 grid-flow-col">
        <h3>Squat</h3>
        <p>{TM.squat}</p>
        <h3>Bench Press</h3>
        <p>{TM.bench}</p>
        <h3>Deadlift</h3>
        <p>{TM.deadlift}</p>
        <h3>Overhead Press</h3>
        <p>{TM.overhead}</p>
      </div>
    </div>
  );
}
