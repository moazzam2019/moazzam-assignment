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

const Entry = () => {
  const [station, setStation] = useState("");

  const handleChange = (event) => {
    setStation(event.target.value);
  };

  const [numberPlate, setNumberPlate] = useState("");

  const handleChange2 = (event) => {
    setNumberPlate(event.target.value);
  };

  const [date, setDate] = useState(new Date());

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
              label="Station"
              value={station}
              onChange={handleChange}
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
            label="Number Plate"
            value={numberPlate}
            variant="outlined"
            onChange={handleChange2}
          />
          <DatePicker onChange={setDate} value={date} />
          <Button
            variant="contained"
            onClick={async () => {
              const body = {
                station: station,
                number_plate: numberPlate,
                date: date,
              };
              await axios.post(API, body);
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Entry;
