type Props = {
  selectedExercise: string;
  allExercises: string[];
  setExercise: React.Dispatch<React.SetStateAction<string>>;
};

import { capitalize } from "../helpers";

export default function ExercisePicker({
  selectedExercise,
  allExercises,
  setExercise,
}: Props) {
  function handleClick(e, exercise) {
    console.log({ e, exercise });
    // setExercise(e.target.innerText);
    setExercise(exercise);
  }
  return (
    <div className="grid grid-flow-col gap-x-1 ">
      {allExercises.map((exercise) => {
        return (
          <button
            className={` text-slate-900 font-display text-lg rounded py-1 ${
              selectedExercise == exercise ? "bg-pink-300" : "bg-yellow-200"
            }`}
            key={exercise}
            onClick={(e) => handleClick(e, exercise)}
          >
            {capitalize(exercise)}
          </button>
        );
      })}
    </div>
  );
}
