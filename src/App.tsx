import { useState, useEffect } from 'react';
import Header from './Header';
import Nav from './Nav';
import TMCalc from './TMCalc';
import { useCookies } from 'react-cookie';
import WeekSlider from './WeekSlider';
import WorkoutTable from './WorkoutTable';

function App() {
  const [cookies, setCookie] = useCookies(['oneRM']);
  let [squat, bench, deadlift, overhead] = '';
  let squatTM, benchTM, deadliftTM, overheadTM;

  if (cookies.oneRM) {
    ({ squat, bench, deadlift, overhead } = cookies.oneRM);
    [squatTM, benchTM, deadliftTM, overheadTM] = [
      squat * 0.9,
      bench * 0.9,
      deadlift * 0.9,
      overhead * 0.9,
    ];
  }

  const [count, setCount] = useState(0);
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
  const [week, setWeek] = useState(1);

  return (
    <div>
      <meta name="description" content="workout helper for you" />
      <link rel="icon" href="/favicon.ico" />
      {/* <p>Message from the Server: {props.message}!</p> */}
      <Header title="Five Three One" />
      <Nav />
      <TMCalc oneRM={oneRM} setOneRM={setOneRM} TM={TM} setTM={setTM} />
      <WeekSlider week={week} setWeek={setWeek} />
      <WorkoutTable week={week} TM={TM}/>
    </div>
  );
}

export default App;
