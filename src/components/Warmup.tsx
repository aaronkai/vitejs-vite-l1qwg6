import { useState } from "react";

type warmupExercises = {
  name: string;
  reps: number;
  sets: number;
}[];

export default function Warmup() {
  const [warmupExercises, setWarmupExercises] = useState<warmupExercises>([
    { name: "box jump", reps: 10, sets: 2 },
    { name: "broad jump", reps: 10, sets: 2 },
    { name: "dead bugs", reps: 10, sets: 2 },
  ]);
  const [newExercise, setNewExercise] = useState({
    name: "",
    sets: 0,
    reps: 0,
  });
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    console.log(name, value);
    setNewExercise((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setWarmupExercises((prevState) => [...prevState, newExercise]);
    setNewExercise({
      name: "",
      sets: 0,
      reps: 0,
    });
  }

  console.log({ newExercise });
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>sets</th>
            <th>exercise name</th>
            <th>reps</th>
          </tr>
        </thead>
        <tbody>
          {warmupExercises.map((exercise) => {
            return (
              <tr key={exercise.name}>
                <td>{exercise.sets}</td>

                <td>{exercise.name}</td>
                <td>{exercise.reps}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form className="grid grid-cols-1" onSubmit={handleSubmit}>
        <label htmlFor="name">Exercise name </label>
        <input
          required
          type="text"
          id="name"
          name="name"
          value={newExercise.name}
          onChange={handleChange}
        />
        <label htmlFor="sets"> Sets</label>
        <input
          required
          type="number"
          id="sets"
          name="sets"
          value={newExercise.sets}
          onChange={handleChange}
        />
        <label htmlFor="reps">Reps </label>
        <input
          required
          type="number"
          id="reps"
          name="reps"
          value={newExercise.reps}
          onChange={handleChange}
        />
        <input type="submit" value="Add New Warmup Exercise" />
      </form>
    </>
  );
}
