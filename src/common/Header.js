import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { styled } from "@mui/system";

const MyBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "50px",
});
const MyTabPanel = styled(TabPanel)({});
const MyTabList = styled(TabList)({});
const MyTab = styled(Tab)({
  paddingRight: "130px",
  paddingLeft: "130px",
});

export default function Header() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MyBox sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <MyTabList onChange={handleChange} aria-label="lab API tabs example">
            <MyTab label="소개공간" value="1" />
            <MyTab label="여행지" value="2" />
            <MyTab label="리뷰" value="3" />
          </MyTabList>
        </Box>
        {/* <MyTabPanel value="1">SHOP</MyTabPanel>
        <MyTabPanel value="2">TRIP</MyTabPanel>
        <MyTabPanel value="3">COMMUNITY</MyTabPanel> */}
      </TabContext>
    </MyBox>
  );
}
