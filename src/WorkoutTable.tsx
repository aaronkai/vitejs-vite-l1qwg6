import { calcPlate } from './helpers';

export default function WorkoutTable({ week, TM }) {
  return (
    <div>
      <p>table</p>
      <table>
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
      </table>
      <th>Bench</th>
      <th>Deadlift</th>
      <th>Overhead</th>
    </div>
  );
}
