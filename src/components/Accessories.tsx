import { useState } from "react";

type Exercises = {
  day1: {
    exerciseName: string;
    sets: number;
    reps: number;
  }[];
  day2: {
    exerciseName: string;
    sets: number;
    reps: number;
  }[];
  day3: {
    exerciseName: string;
    sets: number;
    reps: number;
  }[];
};

export default function Accessories() {
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
        {Object.keys(mirrorBro).map((key: any) => {
          if (key === selectedDay) {
            return (
              <tbody>
                {mirrorBro[key as keyof Exercises].map((exercise) => {
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
