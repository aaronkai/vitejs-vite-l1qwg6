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
    { name: "medicine ball", reps: 10, sets: 2 },
  ]);
  const [newExercise, setNewExercise] = useState({
    name: "",
    sets: 0,
    reps: 0,
  });
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    console.log(name, value);
    setNewExercise((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setWarmupExercises((prevState) => [...prevState, newExercise]);
    setNewExercise({
      name: "",
      sets: 0,
      reps: 0,
    });
  }

  return (
    <div className="grid gap-4">
      <table className="border-b-4 border-x-4 border-yellow-200 ">
        <thead>
          <tr>
            <th
              colSpan={3}
              className="text-2xl font-bold uppercase bg-yellow-200 text-slate-900 py-2 "
            >
              Warmup
            </th>
          </tr>
          <tr>
            <th className="p-2 text-xl text-slate-100">sets</th>
            <th className="p-2 text-xl text-slate-100">exercise name</th>
            <th className="p-2 text-xl text-slate-100">reps</th>
          </tr>
        </thead>
        <tbody>
          {warmupExercises.map((exercise) => {
            return (
              <tr key={exercise.name}>
                <td className="text-center text-xl text-slate-100  text-slate-100">
                  {exercise.sets}
                </td>

                <td className="text-center text-xl text-slate-100  text-slate-100">
                  {exercise.name}
                </td>
                <td className="text-center text-xl text-slate-100  text-slate-100">
                  {exercise.reps}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className=" p-4  bg-yellow-200 self-start">
        <h2 className="text-xl font-bold text-slate-900 uppercase">
          Enter Your One-Rep Maxes
        </h2>
        <form className="grid grid-cols-1" onSubmit={handleSubmit}>
          <label className="block mt-4 text-slate-900 text-lg" htmlFor="name">
            Exercise name{" "}
          </label>
          <input
            className="block w-full col-span-2 text-slate-900 border-2 border-slate-900"
            required
            type="text"
            id="name"
            name="name"
            value={newExercise.name}
            onChange={handleChange}
          />
          <label className="block mt-4 text-slate-900 text-lg" htmlFor="sets">
            {" "}
            Sets
          </label>
          <input
            className="block w-full col-span-2 text-slate-900 border-2 border-slate-900"
            required
            type="number"
            id="sets"
            name="sets"
            value={newExercise.sets === 0 ? "" : newExercise.sets}
            onChange={handleChange}
          />
          <label className="block mt-4 text-slate-900 text-lg" htmlFor="reps">
            Reps{" "}
          </label>
          <input
            className="block w-full col-span-2 text-slate-900 border-2 border-slate-900"
            required
            type="number"
            id="reps"
            name="reps"
            value={newExercise.reps === 0 ? "" : newExercise.reps}
            onChange={handleChange}
          />
          <input type="submit" value="Add New Warmup Exercise" />
        </form>
      </div>
    </div>
  );
}
