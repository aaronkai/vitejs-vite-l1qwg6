import { ChangeEvent } from "react";
import { calcPlate, capitalize } from "../helpers";

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
    <div className="p-2">
      <h2 className="text-2xl">Enter Your One-Rep Maxes</h2>

      <div>
        <form onSubmit={handleSubmit}>
          {exercises.map((exercise) => {
            return (
              <div key={exercise}>
                <label htmlFor={exercise} className="block mt-2">
                  {capitalize(exercise)} 1RM:
                  <input
                    type="text"
                    value={oneRM[exercise] || ""}
                    id={exercise}
                    name={exercise}
                    tabIndex={1}
                    onChange={(e) => handleChange(e)}
                    required
                    className="block w-full col-span-2"
                    // className="bg-slate-50 border border-slate-300 focus:ring-2 text-slate-900 text-sm rounded focus:border-slate-300 focus:ring-blue-500 block w-full p-2 col-span-2"
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
{
  /* <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required> */
}
