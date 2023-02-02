import React from "react";
import ReactApexChart from "react-apexcharts";
import { SERIES } from "../constants/SERIES";
import { format } from "date-fns";
import { getJsDateFromExcel } from "../utils/excelToDate";

const ChartComponent = () => {
  const options = {
    chart: {
      id: "chart2",
      type: "line",
      height: 350,
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    colors: ["#546E7A"],
    stroke: {
      width: 3,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: SERIES.map((item) =>
        format(getJsDateFromExcel(item.date), "dd MMM yyyy")
      ),
    },
    annotations: {
      yaxis: [
        {
          y: 600,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "This is a test",
          },
        },
        {
          y: 900,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "This is a test 2",
          },
        },
      ],
      xaxis: [
        {
          x: "23 Nov 2022",
          borderColor: "red",
          label: {
            style: {
              color: "#fff",
              background: "red",
            },
            text: "This is a test 3",
          },
        },
      ],
    },
  };

  const optionsLine = {
    chart: {
      id: "chart1",
      height: 200,
      type: "area",
      brush: {
        target: "chart2",
        enabled: true,
      },
      selection: {
        enabled: true,
      },
    },
    colors: ["#008FFB"],
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.91,
        opacityTo: 0.1,
      },
    },
    xaxis: {
      type: "date",
      categories: SERIES.map((item) =>
        format(getJsDateFromExcel(item.date), "dd MMM yyyy")
      ),
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tickAmount: 2,
    },
  };

  return (
    <div>
      <div id="wrapper">
        <div id="chart-line2">
          <ReactApexChart
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            options={options}
            series={[
              {
                name: "Revenue",
                data: SERIES.map((item) => item.revenue),
              },
            ]}
            type="line"
            height={350}
          />
        </div>
        <div id="chart-line">
          <ReactApexChart
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            options={optionsLine}
            series={[
              {
                name: "Revenue",
                data: SERIES.map((item) => item.revenue),
              },
            ]}
            type="area"
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
