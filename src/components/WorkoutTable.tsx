import { calcPlate, percentages, sets, reps } from "../helpers";
import { useState } from "react";
import ExercisePicker from "./ExercisePicker";
import Button from "./Button";

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
    <div>
      <ExercisePicker
        selectedExercise={exercise}
        allExercises={exercises}
        setExercise={setExercise}
      />
      <table>
        <thead>
          <tr>
            <th colSpan={3}>{exercise}</th>
          </tr>
          <tr>
            <th>Sets</th>
            <th>Weight</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          {percentages[week].map((percentage, i) => (
            <tr key={i}>
              <td className="flex flex-row">
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
              <td>{calcPlate(TM[exercise] * percentage, plateSize)}</td>
              <td>{reps[week][i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
