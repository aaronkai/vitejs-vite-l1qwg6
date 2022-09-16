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
    <div className="grid gap-12 mb-8">
      <ExercisePicker
        selectedExercise={exercise}
        allExercises={exercises}
        setExercise={setExercise}
      />
      <table className="w-full">
        <thead>
          <tr>
            <th
              colSpan={3}
              className="text-2xl font-normal bg-yellow-200 text-slate-900 "
            >
              {capitalize(exercise)} Week {week + 1}
            </th>
          </tr>
          <tr>
            <th className="p-2 text-2xl font-normal">Sets</th>
            <th className="p-2 text-2xl font-normal">Weight</th>
            <th className="p-2 text-2xl font-normal">Reps</th>
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
              <td className="text-center text-xl text-normal">
                {calcPlate(TM[exercise] * percentage, plateSize)}
              </td>
              <td className="text-center text-xl text-normal">
                {reps[week][i]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
