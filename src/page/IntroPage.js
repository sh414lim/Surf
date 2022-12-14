import React from "react";
import { Box, Tab, Tabs, Typography, Grid } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function IntroPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container spaciong={2}>
        <Grid xs={6}>
          <h1>12</h1>
        </Grid>
        <Grid xs={6}>
          <h1>23</h1>
        </Grid>
      </Grid>
    </>
    // <div>
    //   <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
    //     <Tabs
    //       value={value}
    //       onChange={handleChange}
    //       aria-label="basic tabs example"
    //     >
    //       <Tab label="Item One" {...a11yProps(0)} />
    //       <Tab label="Item Two" {...a11yProps(1)} />
    //       <Tab label="Item Three" {...a11yProps(2)} />
    //     </Tabs>
    //   </Box>
    //   <TabPanel value={value} index={0}>
    //     Item One
    //   </TabPanel>
    //   <TabPanel value={value} index={1}>
    //     Item Two
    //   </TabPanel>
    //   <TabPanel value={value} index={2}>
    //     Item Three
    //   </TabPanel>
    // </div>
  );
}

export default IntroPage;