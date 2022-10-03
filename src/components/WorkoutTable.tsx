import { calcPlate, percentages, sets, reps } from "../helpers";
import { useEffect, useState } from "react";
import ExercisePicker from "./ExercisePicker";
import Button from "./Button";
import { capitalize } from "../helpers";
import CountdownTimer from "./CountdownTimer";
import TrainingMaxDisplay from "./TrainingMaxDisplay";
import WeekPicker from "./WeekPicker";

interface Props {
  TM: {
    squat: number;
    bench: number;
    deadlift: number;
    overhead: number;
    [index: string]: number;
  };
  setTM: React.Dispatch<
    React.SetStateAction<{
      squat: number;
      bench: number;
      deadlift: number;
      overhead: number;
    }>
  >;
  week: number;
  setWeek: React.Dispatch<React.SetStateAction<number>>;
  setFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const plateSize = 2.5;

export default function WorkoutTable({
  week,
  TM,
  setTM,
  setWeek,
  setFormVisible,
}: Props) {
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
  const [boop, setBoop] = useState(false);
  const [timer, setTimer] = useState({startTimer: false, stopTimer: false, restartTimer: false})

  return (
    <div className="grid gap-1">
      <TrainingMaxDisplay TM={TM} setTM={setTM} />
      <WeekPicker week={week} setWeek={setWeek} />
      <ExercisePicker
        selectedExercise={exercise}
        allExercises={exercises}
        setExercise={setExercise}
      />
      <CountdownTimer seconds={90} boop={boop} setBoop={setBoop} timer={timer}
                      setTimer={setTimer} />
      <table className="border-b-4 border-x-4 border-yellow-200 ">
        <thead>
          <tr>
            <th
              colSpan={4}
              className="text-2xl font-bold uppercase bg-yellow-200 text-slate-900 py-2 "
            >
              {capitalize(exercise)} Week {week + 1}
            </th>
          </tr>
          <tr>
            <th className="p-2 text-xl text-slate-100">Sets</th>
            <th className="p-2 text-xl text-slate-100">Lbs</th>
            <th className="p-2 text-xl text-slate-100">Lbs/side</th>
            <th className="p-2 text-xl text-slate-100">Reps</th>
          </tr>
        </thead>
        <tbody>
          {percentages[week].map((percentage, i) => (
            <tr key={i}>
              <td className="flex flex-row justify-around flex-wrap">
                {[...Array(sets[week][i])].map((x, j) => {
                  return (
                    <Button
                      exercise={exercise}
                      exerciseCompletion={exerciseCompletion}
                      setExerciseCompletion={setExerciseCompletion}
                      sets={i}
                      row={j}
                      key={exercise + i + j}
                      boop={boop}
                      setBoop={setBoop}
                      timer={timer}
                      setTimer={setTimer}
                    />
                  );
                })}
              </td>
              <td className="text-center text-xl text-slate-100  text-slate-100">
                {calcPlate(TM[exercise] * percentage, 5)}
              </td>
              <td className="text-center text-xl text-slate-100  text-slate-100">
                {calcPlate((TM[exercise] * percentage - 45) / 2, 2.5)}
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
