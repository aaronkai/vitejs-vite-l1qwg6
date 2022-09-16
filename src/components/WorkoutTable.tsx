import { calcPlate, percentages, sets, reps } from "../helpers";
import { useState } from "react";
import ExercisePicker from "./ExercisePicker";
import Button from "./Button";
import { capitalize } from "../helpers";

const plateSize = 5;

export default function WorkoutTable({ week, TM }) {
  const [exercise, setExercise] = useState("squat");
  const [exerciseCompletion, setExerciseCompletion] = useState({
    squat: [
      false,
      false,
      false,
      false,
      false,
      false,
      [false, false, false, false, false],
    ],
    bench: [
      false,
      false,
      false,
      false,
      false,
      false,
      [false, false, false, false, false],
    ],
    deadlift: [
      false,
      false,
      false,
      false,
      false,
      false,
      [false, false, false, false, false],
    ],
    overhead: [
      false,
      false,
      false,
      false,
      false,
      false,
      [false, false, false, false, false],
    ],
  });
  const exercises = Object.keys(TM);
  return (
    <div className="grid">
      <ExercisePicker
        selectedExercise={exercise}
        allExercises={exercises}
        setExercise={setExercise}
      />
      <table className="m-2 border-2 border-yellow-200">
        <thead>
          <tr>
            <th
              colSpan={3}
              className="text-2xl font-bold uppercase bg-yellow-200 text-slate-900 py-2 "
            >
              {capitalize(exercise)} Week {week + 1}
            </th>
          </tr>
          <tr>
            <th className="p-2 text-2xl text-slate-100">Sets</th>
            <th className="p-2 text-2xl text-slate-100">Weight</th>
            <th className="p-2 text-2xl text-slate-100">Reps</th>
          </tr>
        </thead>
        <tbody>
          {percentages[week].map((percentage, i) => (
            <tr key={i}>
              <td className="flex flex-row justify-around">
                {[...Array(sets[week][i])].map((x, j) => {
                  return (
                    <Button
                      exercise={exercise}
                      exerciseCompletion={exerciseCompletion}
                      setExerciseCompletion={setExerciseCompletion}
                      sets={i}
                      row={j}
                      key={exercise + i + j}
                    />
                  );
                })}
              </td>
              <td className="text-center text-xl text-slate-100  text-slate-100">
                {calcPlate(TM[exercise] * percentage, plateSize)}
              </td>
              <td className="text-center text-xl  text-slate-100 ">
                {reps[week][i]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
