import * as React from "react";
import styles from "../BusVendorPage/BusShuttleList.module.css";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Table from "react-bootstrap/Table";
import addBusIcon from "../../assets/addBusIcon.svg";
import filterIcon3 from "../../assets/filterIcon3.png";
import sorts from "../../assets/sorts.png";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";

function BusShuttleList() {
  return (
    <div className="container">
      <div className={styles.listContainer}>
        <div className={styles.listWrapper}>
          <div className={styles.barWrap}>
            <TextField
              style={{ width: "30%" }}
              variant="outlined"
              type="search"
              placeholder="Search"
              InputProps={{
                endAdornment: <SearchIcon />,
              }}
            />
            <div className={styles.btnWrap}>
              <button className={styles.btnShuttleList}>
                <img src={sorts} /> Sort
              </button>

              <button className={styles.btnShuttleList}>
                <img src={filterIcon3} /> Filter
              </button>
              <button className={styles.btnAddBusList}>
                <img src={addBusIcon} /> Add Bus & Shuttle
              </button>
            </div>
          </div>
          <Table className={styles.Table}>
            <thead className={styles.theadHead}>
              <tr>
                <th scope="col">Shuttle Name</th>
                <th scope="col">City</th>
                <th scope="col">Addres</th>
                <th scope="col">Total bus</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Terminal Lebak Bulus</th>

                <td>Jakarta</td>
                <td>
                  Jl.Pelanet konoha 200,
                  <br />
                  konohagakure indonesia
                </td>
                <td>10</td>
                <td>Published</td>
              </tr>
              <tr>
                <th scope="row">Terminal Lebak Bulus</th>

                <td>Jakarta</td>
                <td>
                  Jl.Pelanet konoha 200,
                  <br />
                  konohagakure indonesia
                </td>
                <td>10</td>
                <td>Published</td>
              </tr>
              <tr>
                <th scope="row">Terminal Lebak Bulus</th>

                <td>Jakarta</td>
                <td>
                  Jl.Pelanet konoha 200,
                  <br />
                  konohagakure indonesia
                </td>
                <td>10</td>
                <td>Published</td>
              </tr>
              <tr>
                <th scope="row">Terminal Lebak Bulus</th>

                <td>Jakarta</td>
                <td>
                  Jl.Pelanet konoha 200,
                  <br />
                  konohagakure indonesia
                </td>
                <td>10</td>
                <td>Published</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
export default BusShuttleList;
