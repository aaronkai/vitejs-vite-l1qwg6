import { useState } from "react";
import MainLifts from "./MainLifts";
import WorkoutPartPicker from "./WorkoutPartPicker";

interface Props {
  setFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  formVisible: boolean;
  setCookie: any;
  cookies: {
    oneRM?: any;
    TM?: any;
    oneRMLogged?: any;
  };
}

type WorkoutTypes = "warmup" | "main" | "accessories";

export default function Workout({
  cookies,
  setCookie,
  formVisible,
  setFormVisible,
}: Props) {
  const [workoutPart, setWorkoutPart] = useState<WorkoutTypes>();
  return (
    <>
      <WorkoutPartPicker setWorkoutPart={setWorkoutPart} />
      {workoutPart === "main" && (
        <MainLifts
          setFormVisible={setFormVisible}
          setCookie={setCookie}
          cookies={cookies}
          formVisible={formVisible}
        />
      )}
    </>
  );
}
