interface Props {
  exercise: string;
  exerciseCompletion: {
    squat: (boolean | boolean[])[];
    bench: (boolean | boolean[])[];
    deadlift: (boolean | boolean[])[];
    overhead: (boolean | boolean[])[];
    //ToDo: fix type
    [index: string]: any;
  };
  setExerciseCompletion: any;
  sets: number;
  row: number;
  boop: boolean;
  setBoop: React.Dispatch<React.SetStateAction<boolean>>;
}

import { StarIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
export default function Button({
  exercise,
  exerciseCompletion,
  setExerciseCompletion,
  sets,
  row,
  boop,
  setBoop,
}: Props) {
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
    if (sets < 6) {
      let state = exerciseCompletion[exercise];
      state[sets] = !state[sets];
      setExerciseCompletion((prevState: typeof exerciseCompletion) => ({
        ...prevState,
        exercise: state,
      }));
    } else {
      let state = exerciseCompletion[exercise];
      state[sets][row] = !state[sets][row];
      setExerciseCompletion((prevState: typeof exerciseCompletion) => ({
        ...prevState,
        exercise: state,
      }));
    }
  }

  function toggleBoop() {
    setBoop((prev) => !prev);
  }

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
          toggleBoop();
        }}
      >
        {icon}
      </button>
    </div>
  );
}
