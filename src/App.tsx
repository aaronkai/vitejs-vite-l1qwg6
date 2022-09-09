import { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import TMCalc from './TMCalc';

function App() {
  const [count, setCount] = useState(0);
  const [oneRM, setOneRM] = useState({
    squat: '',
    bench: '',
    deadlift: '',
    overhead: '',
  });

  const [TM, setTM] = useState({
    squat: '',
    bench: '',
    deadlift: '',
    overhead: '',
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
    </div>
  );
}

export default App;
