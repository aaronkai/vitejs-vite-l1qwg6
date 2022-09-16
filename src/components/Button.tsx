import { StarIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
export default function Button({
  exercise,
  exerciseCompletion,
  setExerciseCompletion,
  sets,
  row,
}) {
  // const [checked, setChecked] = useState(false);
  let icon;
  if (sets < 6) {
    if (!exerciseCompletion[exercise][sets]) {
      icon = <StarIcon className="w-8 h-8" />;
    } else {
      icon = <CheckCircleIcon className="w-8 h-8" />;
    }
  } else {
    if (!exerciseCompletion[exercise][sets][row]) {
      icon = <StarIcon className="w-8 h-8" />;
    } else {
      icon = <CheckCircleIcon className="w-8 h-8" />;
    }
  }

  function handleClick() {
    // setChecked(!checked);
    if (sets < 6) {
      let state = exerciseCompletion[exercise];
      state[sets] = !state[sets];
      console.log(state);
      setExerciseCompletion((prevState) => ({
        ...prevState,
        exercise: state,
      }));
    } else {
      let state = exerciseCompletion[exercise];
      state[sets][row] = !state[sets][row];
      console.log(state);
      setExerciseCompletion((prevState) => ({
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
