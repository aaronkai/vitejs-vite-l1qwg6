import { calcPlate, percentages, sets, reps } from "../helpers";
import { useState } from "react";
import ExercisePicker from "./ExercisePicker";

const plateSize = 5;

export default function WorkoutTable({ week, TM }) {
  const [exercise, setExercise] = useState("squat");
  const exercises = Object.keys(TM);
  // console.log({ exercises });
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
              <td>{sets[week][i]}</td>
              <td>{calcPlate(TM[exercise] * percentage, plateSize)}</td>
              <td>{reps[week][i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <table>
        <thead>
          <tr>
            <th colSpan={3}>Bench</th>
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
              <td>{sets[week][i]}</td>
              <td>{calcPlate(TM.bench * percentage, plateSize)}</td>
              <td>{reps[week][i]}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      {/* <p>table</p>
      <table>
        <tbody>
          <tr>
            <th colspan="3">Squat</th>
          </tr>
          <tr>
            <th>Sets</th>
            <th>Weight</th>
            <th>Reps</th>
          </tr>
          <tr>
            <td>1</td>
            <td>{calcPlate(TM.squat * 0.4, 2.5)}</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{calcPlate(TM.squat * 0.5, 2.5)}</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{calcPlate(TM.squat * 0.6, 2.5)}</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{calcPlate(TM.squat * 0.65, 2.5)}</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{calcPlate(TM.squat * 0.75, 2.5)}</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{calcPlate(TM.squat * 0.85, 2.5)}</td>
            <td>5</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{calcPlate(TM.squat * 0.65, 2.5)}</td>
            <td>5</td>
          </tr>
        </tbody>
      </table> */}
      {/* <th>Bench</th>
      <th>Deadlift</th>
      <th>Overhead</th> */}
    </div>
  );
}
