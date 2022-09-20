import { capitalize } from "../helpers";

interface Props {
  TM: {
    squat: number;
    bench: number;
    deadlift: number;
    overhead: number;
    [index: string]: number;
  }
  setFormVisible:  React.Dispatch<React.SetStateAction< boolean>>;
}

export default function TrainingMaxDisplay({ TM,setFormVisible }: Props) {
  return (
    <div className="bg-yellow-200 py-2" onClick={()=> {setFormVisible(true)}}>
      <h2 className="pl-4 text-xl uppercase font-bold text-slate-900 font-display  underline-offset-4">
        Training Maxes
      </h2>
      <div className="grid grid-flow-col">
        {Object.keys(TM).map((exercise) => {
          return (
            <div key={exercise}>
              <h3 className="pl-4 text-xl text-slate-900 font-display ">
                {capitalize(exercise)}
              </h3>
              <p className=" text-slate-900 pl-4 text-2xl mx-1 font-display">
                {TM[exercise]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
