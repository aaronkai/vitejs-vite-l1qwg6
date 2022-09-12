import { calcPlate } from './helpers';

const percentages = [
  [0.4, 0.5, 0.6, 0.65, 0.75, 0.85, 0.65],
  [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.7],
  [0.4, 0.5, 0.6, 0.75, 0.85, 0.95, 0.75],
];
const sets = [
  [1, 1, 1, 1, 1, 1, 5],
  [1, 1, 1, 1, 1, 1, 5],
  [1, 1, 1, 1, 1, 1, 5],
];
const reps = [
  [5, 5, 3, 5, 5, 5, 5],
  [5, 5, 3, 3, 3, 3, 5],
  [5, 5, 3, 5, 3, 1, 5],
];

const plateSize = 5;
const dayOneExercises = ['squat', 'bench'];
const dayTwoExercise = [];

export default function WorkoutTable({ week, TM }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Squat</th>
          </tr>
          <tr>
            <th>Sets</th>
            <th>Weight</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          {percentages[week].map((percentage, i) => (
            <tr key={i}>
              <td>{sets[week][i]}</td>
              <td>{calcPlate(TM.squat * percentage, plateSize)}</td>
              <td>{reps[week][i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Bench</th>
          </tr>
          <tr>
            <th>Sets</th>
            <th>Weight</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          {percentages[week].map((percentage, i) => (
            <tr key={i}>
              <td>{sets[week][i]}</td>
              <td>{calcPlate(TM.bench * percentage, plateSize)}</td>
              <td>{reps[week][i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <p>table</p>
      <table>
        <tbody>
          <tr>
            <th colspan="3">Squat</th>
          </tr>
          <tr>
            <th>Sets</th>
            <th>Weight</th>
            <th>Reps</th>
          </tr>
          <tr>
            <td>1</td>
            <td>{calcPlate(TM.squat * 0.4, 2.5)}</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{calcPlate(TM.squat * 0.5, 2.5)}</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{calcPlate(TM.squat * 0.6, 2.5)}</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{calcPlate(TM.squat * 0.65, 2.5)}</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{calcPlate(TM.squat * 0.75, 2.5)}</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{calcPlate(TM.squat * 0.85, 2.5)}</td>
            <td>5</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{calcPlate(TM.squat * 0.65, 2.5)}</td>
            <td>5</td>
          </tr>
        </tbody>
      </table> */}
      {/* <th>Bench</th>
      <th>Deadlift</th>
      <th>Overhead</th> */}
    </div>
  );
}
