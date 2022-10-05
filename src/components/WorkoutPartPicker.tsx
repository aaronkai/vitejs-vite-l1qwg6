import { useState } from "react";

type WorkoutTypes = "warmup" | "main" | "accessories" | undefined;

interface Props {
  setWorkoutPart: React.Dispatch<
    React.SetStateAction<WorkoutTypes | undefined>
  >;
}

export default function WorkoutPartPicker({ setWorkoutPart }: Props) {
  const [selectedWorkoutPart, setSelectedWorkoutPart] =
    useState<WorkoutTypes>("warmup");
  function handleClick(value: WorkoutTypes) {
    setWorkoutPart(value);
    setSelectedWorkoutPart(value);
  }
  const parts: WorkoutTypes[] = ["warmup", "main", "accessories"];
  return (
    <div>
      <div className="pb-1 grid grid-flow-col gap-x-1">
        {parts.map((part) => {
          return (
            <button
              className={`text-slate-900 font-display text-lg font-bold uppercase py-2 ${
                part == selectedWorkoutPart ? "bg-pink-300" : "bg-yellow-200"
              }`}
              onClick={() => handleClick(part)}
              key={part}
            >
              {part}
            </button>
          );
        })}
      </div>
    </div>
  );
}
