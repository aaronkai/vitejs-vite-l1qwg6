import { capitalize } from "../helpers";

export default function TrainingMaxDisplay({ TM }) {
  return (
    <div className="bg-yellow-200 mb-12 py-2">
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
    // <div className=" grid grid-cols-[auto_1fr] gap-2 bg-yellow-200">
    //   <div className="bg-yellow-200  rounded p-2 flex content-center justify-center flex-col">
    //     <h2 className="text-center text-2xl text-slate-900  mb-4 font-display underline underline-offset-4 ">
    //       Training
    //     </h2>
    //     <h2 className="text-center text-2xl text-slate-900  mb-4 font-display underline underline-offset-4 ">
    //       Maxes
    //     </h2>
    //   </div>
    //   <div className="grid grid-cols-2 grid-row-2 gap-2">
    //     {Object.keys(TM).map((exercise) => {
    //       return (
    //         <div key={exercise}>
    //           <h3 className="text-center text-xl  text-slate-900  font-display mb-1">
    //             {capitalize(exercise)}
    //           </h3>
    //           <p className=" text-slate-900  rounded  text-center text-xl mx-1 font-display">
    //             {TM[exercise]}
    //           </p>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
}
