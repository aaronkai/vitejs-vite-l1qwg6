import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Workout from "./components/Workout";

function App() {
  const [cookies, setCookie] = useCookies(["oneRM", "oneRMLogged", "TM"]);
  const [formVisible, setFormVisible] = useState(true);

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
          <div>
            <Workout
              setFormVisible={setFormVisible}
              setCookie={setCookie}
              cookies={cookies}
              formVisible={formVisible}
            />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
