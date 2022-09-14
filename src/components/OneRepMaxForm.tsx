import React, { ChangeEvent } from "react";
import { calcPlate } from "../helpers";
import { useCookies } from "react-cookie";

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
  setFormVisible: any;
  setCookie: any;
};

export default function OneRepMaxForm({
  oneRM,
  setOneRM,
  TM,
  setTM,
  setFormVisible,
  setCookie,
}: Props) {
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

  function handleSubmit(event) {
    event.preventDefault();
    setFormVisible(false);
    setCookie("TMsLogged", true, { path: "/" });
  }

  const exercises = Object.keys(oneRM);

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl">Enter Your One-Rep Maxes</h2>

      <div>
        <form onSubmit={handleSubmit}>
          {exercises.map((exercise) => {
            return (
              <div key={exercise}>
                <label htmlFor={exercise}>
                  {exercise} 1RM:
                  <input
                    type="text"
                    value={oneRM[exercise] || ""}
                    id={exercise}
                    name={exercise}
                    tabIndex={1}
                    onChange={(e) => handleChange(e)}
                  />
                </label>
                {/* <p>TM: {`${TM[exercise]}`}</p> */}
              </div>
            );
          })}
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}
