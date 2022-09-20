import { ChangeEvent } from "react";
import { calcPlate, capitalize } from "../helpers";

interface Props {
  oneRM: {
    squat: number;
    bench: number;
    deadlift: number;
    overhead: number;
    [index: string]: number;
  };
  TM: {
    squat: number;
    bench: number;
    deadlift: number;
    overhead: number;
    [index: string]: number | undefined;
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

  function handleSubmit(event:React.FormEvent) {
    event.preventDefault();
    setFormVisible(false);
    setCookie("TMsLogged", true, { path: "/" });
  }

  const exercises = Object.keys(oneRM);

  return (
    <div className="p-4  bg-yellow-200 self-start">
      <h2 className="text-xl font-bold text-slate-900 uppercase">
        Enter Your One-Rep Maxes
      </h2>

      <fieldset className=" ">
        <form onSubmit={handleSubmit}>
          {exercises.map((exercise) => {
            return (
              <div key={exercise}>
                <label
                  htmlFor={exercise}
                  className="block mt-4 text-slate-900 text-lg"
                >
                  {capitalize(exercise)} 1RM:
                  <input
                    type="text"
                    value={oneRM[exercise] || ""}
                    id={exercise}
                    name={exercise}
                    tabIndex={1}
                    onChange={(e) => handleChange(e)}
                    required
                    className="block w-full col-span-2 text-slate-900 border-2 border-slate-900"
                  />
                </label>
              </div>
            );
          })}
          <input
            type="submit"
            value="Calculate Training Max"
            className="bg-pink-300 font-bold text-slate-900 text-xl p-4 mt-4 w-full"
          />
        </form>
      </fieldset>
    </div>
  );
}
{
  /* <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required> */
}
