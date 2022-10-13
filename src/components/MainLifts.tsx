import OneRepMaxForm from "./OneRepMaxForm";
import WorkoutTable from "./WorkoutTable";
import { useState, useEffect } from "react";

interface Props {
  setFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  formVisible: boolean;
  setCookie: any;
  cookies: {
    oneRM?: any;
    TM?: any;
    oneRMLogged?: any;
  };
}

export default function MainLifts({
  cookies,
  setCookie,
  formVisible,
  setFormVisible,
}: Props) {
  // const [cookies, setCookie] = useCookies(["oneRM", "oneRMLogged", "TM"]);
  let squat, bench, deadlift, overhead;
  let [squatTM, benchTM, deadliftTM, overheadTM] = [0, 0, 0, 0];
  const [week, setWeek] = useState(0);
  // const [formVisible, setFormVisible] = useState(true);

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
      <div className=" w-full ">
        {formVisible && (
          <div>
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
          <div className="grid grid-row-3 content-start">
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
    </>
  );
}
