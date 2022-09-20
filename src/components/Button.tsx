interface Props{
  exercise: string
  exerciseCompletion: {
    squat: (boolean | boolean[])[];
    bench: (boolean | boolean[])[];
    deadlift: (boolean | boolean[])[];
    overhead: (boolean | boolean[])[];
    //ToDo: fix type
    [index:string]:  any;
};
  setExerciseCompletion: any;
  sets: number;
  row: number;
}

import { StarIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
export default function Button({
  exercise,
  exerciseCompletion,
  setExerciseCompletion,
  sets,
  row,
}:Props) {
  let icon;
  if (sets < 6) {
    if (!exerciseCompletion[exercise][sets]) {
      icon = <StarIcon className="w-8 h-8 text-pink-300" />;
    } else {
      icon = <CheckCircleIcon className="w-8 h-8 text-green-300" />;
    }
  } else {
    if (!exerciseCompletion[exercise][sets][row]) {
      icon = <StarIcon className="w-8 h-8 text-pink-300" />;
    } else {
      icon = <CheckCircleIcon className="w-8 h-8 text-green-300" />;
    }
  }

  function handleClick() {
    // setChecked(!checked);
    if (sets < 6) {
      let state = exerciseCompletion[exercise];
      state[sets] = !state[sets];
      // console.log(state);
      setExerciseCompletion((prevState: typeof exerciseCompletion) => ({
        ...prevState,
        exercise: state,
      }));
    } else {
      let state = exerciseCompletion[exercise];
      state[sets][row] = !state[sets][row];
      // console.log(state);
      setExerciseCompletion((prevState: typeof exerciseCompletion) => ({
        ...prevState,
        exercise: state,
      }));
    }
  }

  return (
    <div>
      <button onClick={() => handleClick()}>{icon}</button>
    </div>
  );
}
