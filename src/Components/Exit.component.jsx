import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import DatePicker from "react-date-picker";
import { useState } from "react";
import axios from "axios";

const API = "https://crudcrud.com/api/e78497c6520a4ce094ad8dcf88f0ec57/users";

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const distance = {
  "Islamabad Interchange": 0,

  "Thalian Interchange": 40,

  "Chakri Interchange": 80,
  "Balkasar Interchange": 120,

  "Kallar Kahar Interchange": 160,

  "Bhera Interchange": 200,
};

const Exit = () => {
  const [bill, setBill] = useState(0);

  const [newstation, setNewStation] = useState("");

  const changeStation = (event) => {
    setNewStation(event.target.value);
  };

  const [number_plate, setNumberPlate] = useState("");

  const changeNumberPlate = (event) => {
    setNumberPlate(event.target.value);
  };

  const [date, setDate] = useState(new Date());

  const getData = () => {
    const currentDay = weekdays[date.getDay()];
    axios
      .get(API)
      .then((res) => {
        console.log(number_plate);
        let index = res.data.findIndex(
          (item) => item.number_plate === number_plate
        );
        console.log(res.data[index].number_plate);
        console.log(index); // Prints: 1
        console.log(res.data[index].station);
        let prevstation = res.data[index].station;
        if (["Saturday", "Sunday"].includes(currentDay)) {
          setBill(
            20 +
              1.5 * 0.2 * Math.abs(distance[newstation] - distance[prevstation])
          );
        } else {
          setBill(
            20 + 0.2 * Math.abs(distance[newstation] - distance[prevstation])
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(bill);
  };

  return (
    <div>
      <Box sx={{ margin: 15, width: "70%" }}>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl>
            <InputLabel id="demo-simple-select-label">Station</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newstation}
              label="Station"
              onChange={changeStation}
            >
              <MenuItem value="Islamabad Interchange">
                Islamabad Interchange
              </MenuItem>
              <MenuItem value="Thalian Interchange">
                Thalian Interchange
              </MenuItem>
              <MenuItem value="Chakri Interchange">Chakri Interchange</MenuItem>
              <MenuItem value="Balkasar Interchange">
                Balkasar Interchange
              </MenuItem>
              <MenuItem value="Kallar Kahar Interchange">
                Kallar Kahar Interchange
              </MenuItem>
              <MenuItem value="Bhera Interchange">Bhera Interchange</MenuItem>
            </Select>
          </FormControl>
          <TextField
            maxWidth="350"
            id="outlined-basic"
            value={number_plate}
            label="Number Plate"
            variant="outlined"
            onChange={changeNumberPlate}
          />
          <DatePicker onChange={setDate} value={date} />
          <Button variant="contained" onClick={getData}>
            Calculate Bill
          </Button>
        </Box>
        <h3>Base Rate : 20</h3>
        <h3>Total bill : {bill}</h3>
      </Box>
    </div>
  );
};

export default Exit;
