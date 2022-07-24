import React from "react";
import Card from "./Card/Card.js";
import LineChart from "./Charts/LineChart";
import { useRecoilValue } from "recoil";
import { dataState } from "../atoms/DataAtom";

// Variables
import { lineChartData, lineChartOptions } from "./variables/Charts.js";

import {
  Box,
  Button,
  Flex,
  Grid,
  Progress,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

function Tablehf() {
  const dataset = useRecoilValue(dataState);
  // const iconBlue = useColorModeValue("blue.500", "blue.500");
  // const iconBoxInside = useColorModeValue("white", "white");
  // const textColor = useColorModeValue("gray.700", "white");
  // const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  // const borderColor = useColorModeValue("gray.200", "gray.600");
  // const textTableColor = useColorModeValue("gray.500", "white");

  const { colorMode } = useColorMode();
  return (
    <div>
      <Grid
        templateColumns={{ sm: "1fr", lg: "2fr 1fr" }}
        templateRows={{ lg: "repeat(2, auto)" }}
        gap="20px"
      >
        <Card
          bg={
            colorMode === "dark"
              ? "navy.800"
              : "linear-gradient(81.62deg, #fff 2.25%, #fff 79.87%)"
          }
          p="0px"
          maxW={{ sm: "320px", md: "100%" }}
        >
          <Flex direction="column" mb="10px" p="0px 0px 0px 22px">
            <Text color="#000000" fontSize="sm">
              in 2022
            </Text>
          </Flex>
          <Box minH="300px">
            <LineChart
              chartData={lineChartData}
              chartOptions={lineChartOptions}
            />
          </Box>
        </Card>
      </Grid>
    </div>
  );
}

export default Tablehf;
