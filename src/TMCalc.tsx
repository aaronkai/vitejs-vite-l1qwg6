import { ChangeEvent, ChangeEventHandler } from 'react';
import { calcPlate } from './helpers';
import { useCookies } from 'react-cookie';
// import { useState, useEffect } from "react";

export default function TMCalc({ oneRM, setOneRM, TM, setTM }) {
  const [cookies, setCookie] = useCookies(['oneRM']);
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
    setCookie('oneRM', oneRM, { path: '/' });
  }

  return (
    <div className="flex flex-col">
      <h2>TMCalc</h2>
      <div>
        <label htmlFor="bench">
          Bench 1RM
          <input
            type="text"
            value={oneRM.bench}
            id="bench"
            name="bench"
            tabIndex={1}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <p>TM: {TM.bench}</p>
      </div>
      <div>
        <label htmlFor="squat">
          Squat 1RM
          <input
            type="number"
            value={oneRM.squat}
            id="squat"
            name="squat"
            tabIndex={2}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <p>TM: {TM.squat}</p>
      </div>
      <div>
        <label htmlFor="deadlift">
          Deadlift 1RM
          <input
            type="number"
            value={oneRM.deadlift}
            id="deadlift"
            name="deadlift"
            tabIndex={3}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <p>TM: {TM.deadlift}</p>
      </div>
      <div>
        <label htmlFor="overhead">
          Overhead Press 1RM
          <input
            type="number"
            value={oneRM.overhead}
            id="overhead"
            name="overhead"
            tabIndex={4}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <p>TM: {TM.overhead}</p>
      </div>
    </div>
  );
}
