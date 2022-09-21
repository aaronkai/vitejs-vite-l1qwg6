import { useState, useEffect, cloneElement } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import OneRepMaxForm from "./components/OneRepMaxForm";
import { useCookies } from "react-cookie";
import WorkoutTable from "./components/WorkoutTable";
import WeekPicker from "./components/WeekPicker";
import TrainingMaxDisplay from "./components/TrainingMaxDisplay";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet-async";

function App() {
  const [cookies, setCookie] = useCookies(["oneRM", "oneRMLogged", "TM"]);
  let squat, bench, deadlift, overhead;
  let [squatTM, benchTM, deadliftTM, overheadTM] = [0, 0, 0, 0];
  const [week, setWeek] = useState(0);
  const [formVisible, setFormVisible] = useState(true);

  if (cookies.oneRM) {
    ({ squat, bench, deadlift, overhead } = cookies.oneRM);
    if (!cookies.TM) {
      [squatTM, benchTM, deadliftTM, overheadTM] = [
        squat * 0.9,
        bench * 0.9,
        deadlift * 0.9,
        overhead * 0.9,
      ];
    }
  }

  const [oneRM, setOneRM] = useState({
    squat,
    bench,
    deadlift,
    overhead,
  });

  if (cookies.TM) {
    [squatTM, benchTM, deadliftTM, overheadTM] = [
      cookies.TM.squat,
      cookies.TM.bench,
      cookies.TM.deadlift,
      cookies.TM.overhead,
    ];
  }

  const [TM, setTM] = useState({
    squat: squatTM,
    bench: benchTM,
    deadlift: deadliftTM,
    overhead: overheadTM,
  });

  useEffect(() => {
    if (
      oneRM.squat > 0 ||
      oneRM.deadlift > 0 ||
      oneRM.overhead > 0 ||
      oneRM.bench > 0
    ) {
      console.log("setting oneRM cookie in oneRM use effect");
      setCookie("oneRM", oneRM, { path: "/" });
    }
  }, [oneRM]);

  useEffect(() => {
    if (TM.squat > 0 || TM.deadlift > 0 || TM.overhead > 0 || TM.bench > 0) {
      console.log("setting TM cookie in TM use effect");
      setCookie("TM", TM, { path: "/" });
    }
  }, [TM]);

  useEffect(() => {
    console.log({ formVisible });
    console.log("cookie one rep max " + cookies.oneRMLogged);
    if (cookies.oneRMLogged == "true") {
      console.log("1RM set. set form invisible");
      setFormVisible(false);
    } else {
      console.log("no 1RM set. make form visible");
      setFormVisible(true);
    }
  }, [cookies.oneRMLogged]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="workout helper for you" />
        <link rel="icon" href="/favicon.ico" />
        <title>Workout Tracker</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap');
        </style>
      </Helmet>
      <div className=" bg-slate-800 min-h-screen ">
        <div className=" grid grid-rows-[auto_1fr_auto] min-h-screen">
          <header className="border-b-4 border-b-yellow-200 p-4 grid grid-cols-[1fr_auto]">
            <Header title="5/3/1" />
            <Nav setFormVisible={setFormVisible} setCookie={setCookie} />
          </header>
          <div className=" w-full ">
            {formVisible && (
              <div className=" max-w-2xl mx-auto ">
                <OneRepMaxForm
                  oneRM={oneRM}
                  setOneRM={setOneRM}
                  TM={TM}
                  setTM={setTM}
                  setFormVisible={setFormVisible}
                  setCookie={setCookie}
                />
              </div>
            )}
            {!formVisible && (
              <div className="grid grid-row-3 content-start p-4 max-w-2xl mx-auto">
                <WorkoutTable
                  week={week}
                  setWeek={setWeek}
                  TM={TM}
                  setTM={setTM}
                  setFormVisible={setFormVisible}
                />
              </div>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
