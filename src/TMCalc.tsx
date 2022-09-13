import { ChangeEvent, ChangeEventHandler } from "react";
import { calcPlate } from "./helpers";
import { useCookies } from "react-cookie";

export default function TMCalc({ oneRM, setOneRM, TM, setTM }) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setOneRM((prevState) => ({
      ...prevState,
      [name]: Math.floor(value),
    }));

    setTM((prevState) => ({
      ...prevState,
      [name]: calcPlate(value * 0.9, 2.5),
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
