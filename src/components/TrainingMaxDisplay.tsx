import { capitalize } from "../helpers";

export default function TrainingMaxDisplay({ TM }) {
  return (
    <div className="my-8  ">
      <h2 className="text-center text-3xl text-yellow-200 mb-4 font-display underline underline-offset-4">
        Training Maxes
      </h2>
      <div className="grid grid-flow-col">
        {Object.keys(TM).map((exercise) => {
          return (
            <div key={exercise}>
              <h3 className="text-center text-xl text-yellow-200 font-display mb-1">
                {capitalize(exercise)}
              </h3>
              <p className="border-4 border-yellow-200 rounded text-yellow-200  text-center text-2xl py-2 mx-1 font-display">
                {TM[exercise]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
