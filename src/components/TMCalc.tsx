import React, { ChangeEvent } from "react";
import { calcPlate } from "../helpers";

type Props = {
  oneRM: {
    squat: Number;
    bench: Number;
    deadlift: Number;
    overhead: Number;
    [index: string]: Number;
  };
  TM: {
    squat: Number;
    bench: Number;
    deadlift: Number;
    overhead: Number;
    [index: string]: Number | undefined;
  };
  setOneRM: any;
  setTM: any;
};

export default function TMCalc({ oneRM, setOneRM, TM, setTM }: Props) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    const valueInt = parseInt(value);
    setOneRM((prevState: typeof oneRM) => ({
      ...prevState,
      [name]: Math.floor(valueInt),
    }));

    setTM((prevState: typeof TM) => ({
      ...prevState,
      [name]: calcPlate(valueInt * 0.9, 2.5),
    }));
  }

  const exercises = Object.keys(oneRM);

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl">TMCalc</h2>

      <div>
        {exercises.map((exercise) => {
          return (
            <div key={exercise}>
              <label htmlFor={exercise}>
                {exercise} 1RM:
                <input
                  type="text"
                  value={oneRM[exercise]}
                  id={exercise}
                  name={exercise}
                  tabIndex={1}
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <p>TM: {`${TM[exercise]}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
