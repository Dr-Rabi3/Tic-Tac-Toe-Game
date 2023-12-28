import classes from "./Table.module.css";
import { Cell } from "./Cell";

export default function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Cell key={1} id={1} className={classes.cell} />
          </td>
          <td>
            <Cell key={2} id={2} className={classes.cell} />
          </td>
          <td>
            <Cell key={3} id={3} className={classes.cell} />
          </td>
        </tr>
        <tr>
          <td>
            <Cell key={4} id={4} className={classes.cell} />
          </td>
          <td>
            <Cell key={5} id={5} className={classes.cell} />
          </td>
          <td>
            <Cell key={6} id={6} className={classes.cell} />
          </td>
        </tr>
        <tr>
          <td>
            <Cell key={7} id={7} className={classes.cell} />
          </td>
          <td>
            <Cell key={8} id={8} className={classes.cell} />
          </td>
          <td>
            <Cell key={9} id={9} className={classes.cell} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
