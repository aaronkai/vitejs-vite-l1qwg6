import { useState } from "react";
import Accessories from "./Accessories";
import MainLifts from "./MainLifts";
import Warmup from "./Warmup";
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

type WorkoutTypes = "warmup" | "main" | "accessories" | undefined;

export default function Workout({
  cookies,
  setCookie,
  formVisible,
  setFormVisible,
}: Props) {
  const [workoutPart, setWorkoutPart] = useState<WorkoutTypes>("main");
  return (
    <div className="max-w-2xl mx-auto mt-4">
      <WorkoutPartPicker setWorkoutPart={setWorkoutPart} />
      {workoutPart === "warmup" && <Warmup />}
      {workoutPart === "main" && (
        <MainLifts
          setFormVisible={setFormVisible}
          setCookie={setCookie}
          cookies={cookies}
          formVisible={formVisible}
        />
      )}
      {workoutPart === "accessories" && <Accessories />}
    </div>
  );
}
