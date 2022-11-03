import React from "react";
import FloatingActionButtonZoom from "./Components/fab.component";
import Grid from "@mui/system/Unstable_Grid/Grid";

function App() {
  return (
    <div>
      <Grid container>
        <Grid item xs={0} md={2}></Grid>
        <Grid item xs={12} md={8}>
          <FloatingActionButtonZoom />
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </div>
  );
}

export default App;
