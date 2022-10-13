import { useState } from "react";

export default function Accessories() {
  const [warmupExercises, setWarmupExercises] = useState<warmupExercises>([
    { name: "box jump", reps: 10, sets: 2 },
    { name: "broad jump", reps: 10, sets: 2 },
    { name: "medicine ball", reps: 10, sets: 2 },
  ]);

  const [mirrorBro, setMirrorBro] = useState({
    day1: [
      {
        exerciseName: "Lateral Raises",
        sets: 8,
        reps: 8,
      },
      { exerciseName: "Curls", sets: 8, reps: 8 },
      { exerciseName: "Leg Raises", sets: 8, reps: 8 },
    ],
    day2: [
      {
        exerciseName: "Incline DB Press",
        sets: 8,
        reps: 8,
      },
      { exerciseName: "Shrugs", sets: 8, reps: 8 },
      { exerciseName: "Cable Crunches", sets: 8, reps: 8 },
    ],
    day3: [
      {
        exerciseName: "Tricep Pushdowns",
        sets: 8,
        reps: 8,
      },
      { exerciseName: "Neutral Grip Chinups", sets: 8, reps: 8 },
      { exerciseName: "Planks", sets: 8, reps: 1 },
    ],
  });

  const [selectedDay, setSelectedDay] = useState("day1");
  return (
    <>
      <h1>Mirror Bro</h1>
      <table>
        <thead>
          <th>sets</th>
          <th>Exercise</th>
          <th>Reps</th>
        </thead>
        {Object.keys(mirrorBro).map((key) => {
          if (key === selectedDay) {
            return (
              <tbody>
                {mirrorBro[key].map((exercise) => {
                  return (
                    <tr>
                      <td>{exercise.sets}</td>
                      <td>{exercise.exerciseName}</td>
                      <td>{exercise.reps}</td>
                    </tr>
                  );
                })}
              </tbody>
            );
          }
        })}
      </table>
    </>
  );
}
