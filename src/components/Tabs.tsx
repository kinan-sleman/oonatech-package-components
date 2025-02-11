import { Box, Tab, Tabs } from "@mui/material";
import React, { ReactNode, useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
interface tabs {
  id: string | number;
  title: string;
  component: ReactNode;
}
function TabsNavigation({ data, mb }: { data: tabs[]; mb?: string | number }) {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="w-full">
      <Box
        sx={{
          position: "sticky",
          top: "0",
          left: "0",
          backgroundColor: "white",
          zIndex: "4",
          mb: mb,
          // borderBottom: "1px solid #ddd",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            justifyContent: "space-between",
            "& span.MuiTabs-indicator": {
              backgroundColor: "#1b84ff !important",
            },
          }}
        >
          {data?.map((item: tabs, i: number) => {
            return (
              <Tab
                key={i}
                label={item.title}
                {...a11yProps(i)}
                sx={{
                  width: "100%",
                  textTransform: "capitalize",
                  "&.Mui-selected": {
                    color: "#1b84ff", // Text color when active
                  },
                }}
              />
            );
          })}
        </Tabs>
      </Box>
      {data?.map((item: tabs, i: number) => {
        return (
          <CustomTabPanel value={value} index={i} key={i}>
            {item.component}
          </CustomTabPanel>
        );
      })}
    </div>
  );
}

export default TabsNavigation;
