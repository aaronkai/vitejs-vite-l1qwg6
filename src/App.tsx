import { useState, useEffect, cloneElement } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import OneRepMaxForm from "./components/OneRepMaxForm";
import { useCookies } from "react-cookie";
import WorkoutTable from "./components/WorkoutTable";
import WeekPicker from "./components/WeekPicker";
import TrainingMaxDisplay from "./components/TrainingMaxDisplay";
import Footer from "./components/Footer";

function App() {
  const [cookies, setCookie] = useCookies(["oneRM", "TMsLogged"]);
  let squat, bench, deadlift, overhead;
  let [squatTM, benchTM, deadliftTM, overheadTM] = [0, 0, 0, 0];
  const [week, setWeek] = useState(1);
  const [formVisible, setFormVisible] = useState(true);

  if (cookies.oneRM) {
    ({ squat, bench, deadlift, overhead } = cookies.oneRM);
    [squatTM, benchTM, deadliftTM, overheadTM] = [
      squat * 0.9,
      bench * 0.9,
      deadlift * 0.9,
      overhead * 0.9,
    ];
  }

  const [oneRM, setOneRM] = useState({
    squat,
    bench,
    deadlift,
    overhead,
  });

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
      setCookie("oneRM", oneRM, { path: "/" });
    }
  }, [oneRM]);

  useEffect(() => {
    if (cookies.TMsLogged == true) {
      setFormVisible(false);
    }
  }, [cookies.TMsLogged, formVisible]);

  return (
    <>
      <meta name="description" content="workout helper for you" />
      <link rel="icon" href="/favicon.ico" />
      <div className="grid bg-slate-200 min-h-screen content-between justify-center gap-4">
        <header>
          <Header title="Five Three One" />

          <Nav setFormVisible={setFormVisible} setCookie={setCookie} />
        </header>
        {formVisible && (
          <OneRepMaxForm
            oneRM={oneRM}
            setOneRM={setOneRM}
            TM={TM}
            setTM={setTM}
            setFormVisible={setFormVisible}
            setCookie={setCookie}
          />
        )}
        <TrainingMaxDisplay TM={TM} />
        <WeekPicker week={week} setWeek={setWeek} />
        <WorkoutTable week={week} TM={TM} />
        <Footer />
      </div>
    </>
  );
}

export default App;
