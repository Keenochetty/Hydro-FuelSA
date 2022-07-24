import { useEffect, useState } from "react";

// material-ui
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

// project import
import OrdersTable from "../dashboard/OrdersTable";
import IncomeAreaChart from "../dashboard/IncomeAreaChart";
import MonthlyBarChart from "../dashboard/MonthlyBarChart";
import ReportAreaChart from "../dashboard/ReportAreaChart";
import SalesColumnChart from "../dashboard/SalesColumnChart";

import AnalyticEcommerce from "./cards/statistics/AnalyticEcommerce";

// assets
import {
  GiftOutlined,
  MessageOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import MainCard from "./MainCard";
import Sidebar from "./Sidebar";
import Tablehf from "./Tablehf";
import { useRecoilValue } from "recoil";
import { dataState } from "../atoms/DataAtom";
// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: "1rem",
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: "auto",
  right: "auto",
  alignSelf: "flex-start",
  transform: "none",
};

// sales report status
const status = [
  {
    value: "today",
    label: "Today",
  },
  {
    value: "month",
    label: "This Month",
  },
  {
    value: "year",
    label: "This Year",
  },
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

function Dashboard() {
  const [value, setValue] = useState("today");
  const [slot, setSlot] = useState("week");
  const dataset = useRecoilValue(dataState);
  const [totaldistance, setTotaldistance] = useState(0);
  const [totalgain, setTotalgain] = useState(0);
  const petrolprice = 26.31;
  const [petrolrate, setPetrolrate] = useState(0);
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    let total = 0;
    let date;

    if (dataset) {
      dataset.map((item) => {
        total += item.Distance;
        date = new Date(item.Date);
      });
      setTotaldistance(total);
      setDate(new Date(date).toLocaleDateString("en-GB"));
    }
  }, [dataset]);

  useEffect(() => {
    if (totaldistance) {
      setTotalgain((totaldistance - 750).toFixed(2));
      setPetrolrate(((petrolprice * 50) / totaldistance).toFixed(2));
    }
  }, [dataset]);

  return (
    <div className="flex flex-row ">
      <div className="">
        <Sidebar />
      </div>
      <div className="m-8">
        {/* {dataset && dataset.map((item) => <div>{item.Date}</div>)} */}
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
          {/* row 1 */}
          <Grid item xs={12} sx={{ mb: -2.25 }}>
            <Typography variant="h5">Dashboard</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AnalyticEcommerce
              title="Base Distance 2010"
              count="750 km"
              word="basedistance"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AnalyticEcommerce
              title="Total (km) Traveled "
              count={totaldistance.toFixed(2).toString()}
              percentage={parseInt(
                ((totaldistance / 750 - 1) * 100).toFixed(2)
              )}
              extra={(totaldistance - 750).toFixed(2)}
              date={date}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AnalyticEcommerce
              title="Total distance gained"
              count={totalgain.toString()}
              word="totalgain"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AnalyticEcommerce
              title="Your next Service Date"
              count="3 July 2022"
              word="date"
            />
          </Grid>
          <Grid
            item
            md={8}
            sx={{ display: { sm: "none", md: "block", lg: "none" } }}
          />

          {/* row 2 */}
          <Grid item xs={12} md={7} lg={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              {/* <Grid item>
                <Tablehf />
              </Grid> */}
              <Grid item>
                <Typography variant="h5">Vehicle Stats</Typography>
              </Grid>

              {/* <Grid item>
                <Stack direction="row" alignItems="center" spacing={0}>
                  <Button
                    size="small"
                    onClick={() => setSlot("month")}
                    color={slot === "month" ? "primary" : "secondary"}
                    variant={slot === "month" ? "outlined" : "text"}
                  >
                    Month
                  </Button>
                  <Button
                    size="small"
                    onClick={() => setSlot("week")}
                    color={slot === "week" ? "primary" : "secondary"}
                    variant={slot === "week" ? "outlined" : "text"}
                  >
                    Week
                  </Button>
                </Stack>
              </Grid> */}
            </Grid>

            <MainCard content={false} sx={{ mt: 1.5 }}>
              <Box sx={{ pt: 15, pr: 2 }}>
                {/* <IncomeAreaChart slot={slot} /> */}
                <Tablehf />
              </Box>
            </MainCard>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">Savings Overview</Typography>
              </Grid>
              <Grid item />
            </Grid>
            <MainCard sx={{ mt: 2 }} content={false}>
              <Box sx={{ p: 3, pb: 0 }}>
                <Stack spacing={2}>
                  <Typography variant="h6" color="textSecondary">
                    Total saving on this tank of fuel
                  </Typography>
                  <Typography variant="h3">
                    R {(petrolrate * totalgain).toFixed(2)}
                  </Typography>
                </Stack>
              </Box>
              <MonthlyBarChart />
            </MainCard>
          </Grid>
          {/* row 3 */}
          {/* <Grid item xs={12} md={7} lg={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">Recent Orders</Typography>
              </Grid>
              <Grid item />
            </Grid>
            <MainCard sx={{ mt: 2 }} content={false}>
              <OrdersTable />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">Analytics Report</Typography>
              </Grid>
              <Grid item />
            </Grid>
            <MainCard sx={{ mt: 2 }} content={false}>
              <List sx={{ p: 0, "& .MuiListItemButton-root": { py: 2 } }}>
                <ListItemButton divider>
                  <ListItemText primary="Company Finance Growth" />
                  <Typography variant="h5">+45.14%</Typography>
                </ListItemButton>
                <ListItemButton divider>
                  <ListItemText primary="Company Expenses Ratio" />
                  <Typography variant="h5">0.58%</Typography>
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Business Risk Cases" />
                  <Typography variant="h5">Low</Typography>
                </ListItemButton>
              </List>
              <ReportAreaChart />
            </MainCard>
          </Grid> */}
          {/* row 4 */}
          <Grid item xs={12} md={7} lg={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">Wholesalers Sales Report</Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="standard-select-currency"
                  size="small"
                  select
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  sx={{
                    "& .MuiInputBase-input": { py: 0.5, fontSize: "0.875rem" },
                  }}
                >
                  {status.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <MainCard sx={{ mt: 1.75 }}>
              <Stack spacing={1.5} sx={{ mb: -12 }}>
                <Typography variant="h6" color="secondary">
                  Net Profit
                </Typography>
                <Typography variant="h4">$1560</Typography>
              </Stack>
              <SalesColumnChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">Transaction History</Typography>
              </Grid>
              <Grid item />
            </Grid>
            <MainCard sx={{ mt: 2 }} content={false}>
              <List
                component="nav"
                sx={{
                  px: 0,
                  py: 0,
                  "& .MuiListItemButton-root": {
                    py: 1.5,
                    "& .MuiAvatar-root": avatarSX,
                    "& .MuiListItemSecondaryAction-root": {
                      ...actionSX,
                      position: "relative",
                    },
                  },
                }}
              >
                <ListItemButton divider>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        color: "success.main",
                        bgcolor: "success.lighter",
                      }}
                    >
                      <GiftOutlined />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1">Order #002434</Typography>
                    }
                    secondary="03 July 2022, 2:00 AM"
                  />
                  <ListItemSecondaryAction>
                    <Stack alignItems="flex-end">
                      <Typography variant="subtitle1" noWrap>
                        + R22,880
                      </Typography>
                      <Typography variant="h6" color="secondary" noWrap>
                        78%
                      </Typography>
                    </Stack>
                  </ListItemSecondaryAction>
                </ListItemButton>
                <ListItemButton divider>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        color: "primary.main",
                        bgcolor: "primary.lighter",
                      }}
                    >
                      <MessageOutlined />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1">Order #984947</Typography>
                    }
                    secondary="5 June 2022, 1:45 PM"
                  />
                  <ListItemSecondaryAction>
                    <Stack alignItems="flex-end">
                      <Typography variant="subtitle1" noWrap>
                        + R4,832
                      </Typography>
                      <Typography variant="h6" color="secondary" noWrap>
                        8%
                      </Typography>
                    </Stack>
                  </ListItemSecondaryAction>
                </ListItemButton>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        color: "error.main",
                        bgcolor: "error.lighter",
                      }}
                    >
                      <SettingOutlined />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1">Order #988784</Typography>
                    }
                    secondary="4 June 2022, 1:45 PM"
                  />
                  <ListItemSecondaryAction>
                    <Stack alignItems="flex-end">
                      <Typography variant="subtitle1" noWrap>
                        + R10,912
                      </Typography>
                      <Typography variant="h6" color="secondary" noWrap>
                        16%
                      </Typography>
                    </Stack>
                  </ListItemSecondaryAction>
                </ListItemButton>
              </List>
            </MainCard>
            <MainCard sx={{ mt: 2 }}>
              <Stack spacing={3}>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Stack>
                      <Typography variant="h5" noWrap>
                        Help & Support Chat
                      </Typography>
                      <Typography variant="caption" color="secondary" noWrap>
                        Typical replay within 5 min
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item>
                    <AvatarGroup
                      sx={{ "& .MuiAvatar-root": { width: 32, height: 32 } }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="/images/users/avatar-1.png"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="/images/users/avatar-2.png"
                      />
                      <Avatar
                        alt="Cindy Baker"
                        src="/images/users/avatar-3.png"
                      />
                      <Avatar
                        alt="Agnes Walker"
                        src="/images/users/avatar-4.png"
                      />
                    </AvatarGroup>
                  </Grid>
                </Grid>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ textTransform: "capitalize" }}
                  href="contact"
                >
                  Need Help?
                </Button>
              </Stack>
            </MainCard>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Dashboard;

// import React from "react";
// import IncomeAreaChart from "../dashboard/IncomeAreaChart";
// import MonthlyBarChart from "../dashboard/MonthlyBarChart";
// import ReportAreaChart from "../dashboard/ReportAreaChart";
// import SalesColumnChart from "../dashboard/SalesColumnChart";
// import Sidebar from "./Sidebar";

// function Dashboard() {
//   return (
//     <div>
//       <div className="flex flex-row ">
//         <div className="">
//           <Sidebar />
//         </div>
//         <div className="flex-1">
//           <IncomeAreaChart />
//           <MonthlyBarChart />
//           <ReportAreaChart />
//           <SalesColumnChart />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
