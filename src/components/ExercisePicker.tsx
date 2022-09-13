type Props = {
  selectedExercise: string;
  allExercises: string[];
  setExercise: React.Dispatch<React.SetStateAction<string>>;
};

export default function ExercisePicker({
  selectedExercise,
  allExercises,
  setExercise,
}: Props) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setExercise(e.target.innerText);
  }
  return (
    <div>
      {allExercises.map((exercise) => {
        return (
          <button key={exercise} onClick={(e) => handleClick(e)}>
            {exercise}
          </button>
        );
      })}
    </div>
  );
}
