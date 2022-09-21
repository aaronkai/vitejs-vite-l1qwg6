import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { capitalize } from "../helpers";

interface Props {
  TM: {
    squat: number;
    bench: number;
    deadlift: number;
    overhead: number;
    [index: string]: number;
  };
  setTM: React.Dispatch<
    React.SetStateAction<{
      squat: number;
      bench: number;
      deadlift: number;
      overhead: number;
    }>
  >;
}

export default function TrainingMaxDisplay({ TM, setTM }: Props) {
  function adjustUp(exercise: string, oldWeight: number) {
    setTM((prev) => ({
      ...prev,
      [exercise]: oldWeight + 2.5,
    }));
  }
  function adjustDown(exercise: string, oldWeight: number) {
    setTM((prev) => ({
      ...prev,
      [exercise]: oldWeight - 2.5,
    }));
  }
  return (
    <div className="px-2 bg-yellow-200 py-2">
      <h2 className=" text-xl uppercase font-bold text-slate-900 font-display  underline-offset-4">
        Training Maxes
      </h2>
      <div className="grid grid-cols-4 gap-2 justify-between">
        {Object.keys(TM).map((exercise) => {
          return (
            <div key={exercise}>
              <h3 className=" text-md font-bold text-left text-slate-900 font-display ">
                {capitalize(exercise)}
              </h3>
              <div className="grid grid-cols-[1fr_auto] items-center">
                <p className=" text-slate-900 text-xl font-display">
                  {TM[exercise]}
                </p>
                <div>
                  <ChevronUpIcon
                    className="w-4 h-4 "
                    onClick={() => adjustUp(exercise, TM[exercise])}
                  />
                  <ChevronDownIcon
                    className="w-4 h-4"
                    onClick={() => adjustDown(exercise, TM[exercise])}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
